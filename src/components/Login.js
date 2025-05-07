import React, { useState, useRef, useNavigate } from "react";
import Header from "./Header";
import { validateSignInForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  const handleSubmitButtonClick = () => {
    //validate form
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const validationMessage = validateSignInForm(emailValue, passwordValue);
    setErrorMessage(validationMessage);
    if (validationMessage) {
      return;
    }
    //if sign up form
    if (!showSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 my-4">
          {showSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignInForm && (
          <input
            type="text"
            placeholder="Name "
            className="bg-gray-700 text-white p-4 my-4 rounded-md w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="bg-gray-700 text-white p-4 my-4 rounded-md w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-700 text-white p-4 my-4 rounded-md mt-4 w-full"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="bg-red-600 text-white p-4 rounded-md my-6 w-full"
          onClick={handleSubmitButtonClick}
        >
          {showSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
          {showSignInForm
            ? "New to Netflix? Sign Up Now"
            : " Already a member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
