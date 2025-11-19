import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import client from "../utils/openai"

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)
    const searchRef = useRef(null)

    async function handleGptSearchClick() {
        const searchText = searchRef.current.value
        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText + " only give me name of 5 movies, comma seperated like the example result giving ahead. Example Result: Gadar, Sholay, Don, Tu jhuthi mai makkaar, Golmaal"
        const gptResponse = await client.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'user', content: gptQuery },
            ],
        });
        console.log(gptResponse.choices[0].message.content);
    }

    return (
        <div className="pt-[7%] flex justify-center">
            <form className="bg-black grid grid-cols-12 w-1/2" onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" placeholder={lang[langKey].gptSearchPlaceholder}
                    className="bg-white p-4 m-2 col-span-9" ref={searchRef} />
                <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2"
                    onClick={handleGptSearchClick}>{
                        lang[langKey].search
                    }</button>
            </form>
        </div>
    )
}
export default GptSearchBar