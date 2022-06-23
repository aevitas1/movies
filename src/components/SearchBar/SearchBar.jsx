import {GoSearch} from "react-icons/go";
import {useContext, useEffect} from "react";
import {MovieContext} from '../../data/MovieContext';

function SearchBar() {
    const {
        setSearchTerm,
        searchTerm,
        text,
        setText
    } = useContext(MovieContext);

    const handleSearch = () => {
        if (text.length !== 0) {
            setSearchTerm(text)
        }
    };

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            if (text.length !== 0) {
                setSearchTerm(text)
            }
        }
    };

    function handleTextSearch(e) {
        setText(e.target.value)
    }

    useEffect(() => {
        setSearchTerm(text);
    }, [text])

    return (
        searchTerm.length === 0 ? (
            <>
                <div className="searchbar-container">
                    <GoSearch onClick={handleSearch} className="searchbar-icon"/>
                    <input
                        onKeyDown={handleSearchEnter}
                        onChange={handleTextSearch}
                        type="text"
                        placeholder="Search movie..."
                        defaultValue={text}
                    />
                </div>
                <p className="search_results"></p>
            </>
        ) : (
            <>
                <div className="searchbar-container">
                    <GoSearch onClick={handleSearch} className="searchbar-icon"/>
                    <input
                        onKeyDown={handleSearchEnter}
                        onChange={handleTextSearch}
                        type="text"
                        placeholder="Search movie..."
                        defaultValue={text}
                    />
                </div>
                <p className="search_results">Found {searchTerm.length} results</p>
            </>
        )
    )
}

export default SearchBar;
