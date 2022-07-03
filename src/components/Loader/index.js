import './index.scss';
import Loading from '../../images/loading.svg';


const Loader = () => {
    return (
        <div className="loader">
            <img src={Loading} alt="Loading..."/>
        </div>
    )
}

export default Loader;