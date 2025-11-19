import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg"
                    alt="logo" className="h-screen object-cover md:h-auto md:object-contain"/>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </>
    )
}
export default GptSearchPage