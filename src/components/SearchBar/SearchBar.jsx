import {GoSearch} from "react-icons/go";
import {useState, useContext, useEffect} from "react";
import {MovieContext} from '../../data/MovieContext';

function SearchBar() {
    const [text, setText] = useState("");
    const {FetchMovies, setSearchTerm} = useContext(MovieContext);

    const handleSearchText = (e) => {
        setText(e.target.value);
    };

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setSearchTerm(text);
            setText("");
        }
    };

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            setSearchTerm(text);
            setText("");
        }
    };

    return (
        <div className="searchbar-container">
            <GoSearch onClick={handleSearch} className="searchbar-icon"/>
            <input
                onKeyDown={handleSearchEnter}
                onChange={handleSearchText}
                type="text"
                placeholder="Search movie..."
                value={text}
            />
        </div>
    );
}

export default SearchBar;
