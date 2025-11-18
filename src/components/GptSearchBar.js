import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang)
    return (
        <div className="pt-[7%] flex justify-center">
            <form className="bg-black grid grid-cols-12 w-1/2">
                <input type="text" placeholder={lang[langKey].gptSearchPlaceholder}
                    className="bg-white p-4 m-2 col-span-9" />
                <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2">{
                    lang[langKey].search
                    }</button>
            </form>
        </div>
    )
}
export default GptSearchBar