import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm= ({query}:{query?:string}) => {

    return (
        <form action="/" className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search for a startup"
            />
            <div className="flex gap-2">
                {query && (<SearchFormReset/>)}
                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                    </button>
            
            </div>
        </form>
    );
}
export default SearchForm;