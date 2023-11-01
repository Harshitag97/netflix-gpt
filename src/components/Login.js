import React, { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [Issignin, setIssignin] = useState(true)

  const toggleSignIn = () => {
    setIssignin(!Issignin)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="bgimage"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-24 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4 ">
          {Issignin ? "Sign In" : "SignUp"}
        </h1>
        <input
          type="Email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800"
        />
        {!Issignin ? (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        ) : null}

        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {Issignin ? "Sign In" : "SignUp"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignIn}>
          {Issignin
            ? "New to netflix ? Sign up now"
            : "already a user sign In now"}
        </p>
      </form>
    </div>
  )
}

export default Login
