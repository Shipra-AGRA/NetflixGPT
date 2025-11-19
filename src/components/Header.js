import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import React, { Activity, useState } from "react";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const gptSearch = useSelector((store) => store.gpt?.showGptSearch)

    function handleClick() {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    function handleGptSearch() {
        dispatch(toggleGptSearchView())
    }
    function handleLangChange(e) {
        dispatch(changeLanguage(e.target.value))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const { displayName, email, uid } = user
                dispatch(addUser({ displayName, email, uid }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        //called just before when the component unmounts
        () => unsubscribe()
    }, [])
    return (
        user && (<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                className="w-44" alt="logo" />
            <div className="p-2 flex">
                <Activity mode={gptSearch ? "visible" : "hidden"}>
                    <select className="text-white p-2 m-2 bg-gray-700/85" onChange={handleLangChange}>
                        {
                            Object.keys(lang).map((opt, index) =>
                                <option key={index} className="text-white bg-gray-700/85" value={opt}>{opt}</option>)
                        }

                    </select>
                </Activity>
                <button className="text-white bg-purple-800 py-2 px-4 m-2 font-bold cursor-pointer rounded-lg"
                    onClick={handleGptSearch}>{gptSearch?"Home":"GPT Search"}</button>
                <img src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    alt="user icon" className="w-12 h-12" />
                <button onClick={handleClick} className="text-white cursor-pointer font-bold">(Sign out)</button>
            </div>
        </div>)
    )
}
export default Header