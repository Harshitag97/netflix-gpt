import { signOut } from "firebase/auth"
import React from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/Error")
      })
  }

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {/* <img
        className="w-12 h-12"
        src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
        alt="signout"
      /> */}
      {user && (
        <button className="font-bold text-white " onClick={handleSignout}>
          SignOut
        </button>
      )}
    </div>
  )
}

export default Header
