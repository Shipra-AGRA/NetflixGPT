import React, { useRef } from "react"
import { useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)


    function toggleSignInForm() {
        setIsSignInForm(!isSignInForm)
    }
    function handleClick() {
        const message = checkValidData(emailRef.current.value, passwordRef.current.value,
            isSignInForm ? "" : nameRef.current?.value, isSignInForm ? false : true)
        console.log(setErrorMessage(message))
        if (message) return;
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg"
                    alt="logo" />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className="absolute bg-black/85 w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-opacity-50">
                <h1 className="text-white font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm &&
                    <input type="text" placeholder="Full Name" ref={nameRef} className="p-4 my-4 w-full text-white border border-white" />
                }
                <input type="text" ref={emailRef} placeholder="Email Address" className="p-4 my-4 w-full text-white border border-white" />
                <input type="password" ref={passwordRef} placeholder="Password" className="p-4 my-4 w-full text-white border border-white" />
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 text-white font-bold w-full rounded-md cursor-pointer" onClick={handleClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="text-gray-400 py-4 cursor-pointer font-medium" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix?' : 'Already registered'}<span className="text-white font-bold hover:decoration-white hover:underline">{isSignInForm ? 'Sign up now.' : 'Sign in now'}</span></p>
            </form>
        </div>
    )
}
export default Login