import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import React from "react";
import { useEffect } from "react";

const Header = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function handleClick() {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }
     useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                const {displayName,email,uid}=user
                dispatch(addUser({displayName,email,uid}))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        //called just before when the component unmounts
        ()=>unsubscribe()
    }, [])
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="w-44" alt="logo" />
            <div className="p-2">
                <img src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    alt="user icon" className="right-3.5 relative" />
                <button onClick={handleClick } className="text-white cursor-pointer font-bold absolute right-10">(Sign out)</button>
            </div>
        </div>
    )
}
export default Header