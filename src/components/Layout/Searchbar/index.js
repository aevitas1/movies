import './index.scss';


const Searchbar = ({searchBar, setSearchBar, setNav}) => {
    console.log(searchBar)
    function closeSearch() {
        if(searchBar === true) {
            setSearchBar(false);
            setNav(true);
        }
    }

    return(
        <>
        <div className={searchBar === true ? 'search_bar' : 'searchbar_hide'}>
            <input type="text" placeholder="Search"/>
            <div className="close_search_btn" id="close_search" onClick={closeSearch}>
                <div className="close_a"></div>
                <div className="close_b"></div>
            </div>
        </div>

    </>
    )
}

export default Searchbar