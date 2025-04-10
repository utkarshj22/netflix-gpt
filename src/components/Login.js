import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
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
      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white opacity-80">
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
          type="text"
          placeholder="Email or phone number"
          className="bg-gray-700 text-white p-4 my-4 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 text-white p-4 my-4 rounded-md mt-4 w-full"
        />
        <button className="bg-red-600 text-white p-4 rounded-md my-6 w-full">
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
