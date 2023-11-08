import React, { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [Issignin, setIssignin] = useState(true)
  const [errorMessage, seterrorMessage] = useState("")
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate()

  const toggleSignIn = () => {
    setIssignin(!Issignin)
  }

  const handleButtonclick = () => {
    //validate the form data
    //checkValidateData(email.current.value, password.current.value)
    const emessage = checkValidateData(
      email.current.value,
      password.current.value
    )
    seterrorMessage(emessage)

    if (emessage) return

    if (!Issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
          })
          console.log(user)
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          seterrorMessage(errorCode + "-" + errorMessage)
          // ..
        })
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          seterrorMessage(errorCode + "" + errorMessage)
        })
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          //srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="bgimage"
        />
      </div>
      <form
        className="absolute bg-black p-12 w-3/12 my-24 mx-auto right-0 left-0 bg-opacity-80 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-white text-3xl py-4 ">
          {Issignin ? "Sign In" : "SignUp"}
        </h1>
        <input
          ref={email}
          type="Email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800 "
        />
        {!Issignin && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}

        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-800 font-bold text-lg p-2 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonclick}
        >
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
