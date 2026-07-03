import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";//ep-2
import {useEffect} from "react";
import {LOGO} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const navigate = useNavigate();
     const dispatch = useDispatch();
    const user=useSelector((store)=>store.user)
    console.log(user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                const {uid,email,displayName,photoURL}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse");


           } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        //unsubscribe when component unmounts
        return ()=>unsubscribe();
    }, [dispatch,navigate]);

    
    const handleGptSearchClick=()=>{
        //toggle gpt search page
        dispatch(toggleGptSearchView());

    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
                src={LOGO}
                alt="logo"
                width="200"
            />
            {user && (<div className="flex">
                <select className="p-2 m-2 bg-gray-900 text-white " onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
                    
                </select>
                <button className="py-2 px-4 my-2 mx-4 text-white bg-purple-800 rounded-lg"
                onClick={handleGptSearchClick }>GPT Search</button>
                <img className="w-12 h-12"alt="usericon" src={user?.photoURL}/>
                 <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>

            </div>)}
        </div>
    );
};

export default Header;