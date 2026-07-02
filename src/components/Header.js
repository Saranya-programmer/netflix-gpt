import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";//ep-2
import {useEffect} from "react";
import {LOGO} from "../utils/constants";
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


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
                src={LOGO}
                alt="logo"
                width="200"
            />
            {user && (<div className="flex">
                <img className="w-12 h-12"alt="usericon" src={user?.photoURL}/>
                 <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>

            </div>)}
        </div>
    );
};

export default Header;