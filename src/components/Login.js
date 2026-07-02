import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {

    // const navigate = useNavigate();
    const [isSignInForm, setisSignInForm] = useState(true);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, seterrorMessage] = useState();
    // const dispatch = useDispatch();

    const handleButtonClick = () => {
        //va;idate the form data

        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);

        // console.log(message);
        seterrorMessage(message);
        // email.current.value = "";
        // password.current.value = "";
        if (message) return;

        //sign /sign up

        if (!isSignInForm) {
            // Sign Up logic

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate("/browse");
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    })
                    /*   
                    .then(() => {
                            console.log(auth.currentUser);

                            const { uid, email, displayName, photoURL } = auth.currentUser;

                            dispatch(addUser({
                                uid,
                                email,
                                displayName,
                                photoURL,
                            }));

                            // navigate("/browse");
                        });

                        */
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    seterrorMessage(errorCode + " - " + errorMessage);
                });
        }


        else {
            //sign In logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + " - " + errorMessage);
                });
        }
    }



    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <div className="absolute">
                <Header />

                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
                    alt="background" />
            </div>
            {/* <form className="absolute bg-black p-12 w-3/12 left-0 right-0 mx-auto my-36"></form> */}
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black/80 text-white p-12 w-3/12 left-0 right-0 mx-auto my-36 z-20 rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-lg" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-lg bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full rounded-lg bg-gray-700" />
                <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
                <button className="p-4 my-6 w-full bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix?Sign Up now" : "Already registered?Sign In now"}</p>

            </form>
        </div>
    );
};

export default Login;