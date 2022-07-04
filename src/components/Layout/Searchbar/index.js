import './index.scss';
import {useContext} from 'react';
import {MovieContext} from '../../../data/MovieContext';

const Searchbar = ({searchBar, setSearchBar, setNav}) => {
    const {
        text,
        setText,
    } = useContext(MovieContext);

    function closeSearch() {
        if(searchBar === true) {
            setSearchBar(false);
            setNav(true);
            setText('');
        }
    }
    function handleChange(e) {
        setText(e.target.value)
    }

    return(
        <>
        <div className={searchBar === true ? 'search_bar' : 'searchbar_hide'}>
            <input type="text" placeholder="Search" value={text} onChange={handleChange}/>
            <div className="close_search_btn" id="close_search" onClick={closeSearch}>
                <div className="close_a"></div>
                <div className="close_b"></div>
            </div>
        </div>

    </>
    )
}

export default Searchbar