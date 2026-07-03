import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constants";
import Header from "./Header";
const GptSearch=()=>{
    return(
        <div>
            <div className="absolute -z-10">
                <Header />

                <img
                    src={BG_URL}
                    alt="background" />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    );
};
export default GptSearch;