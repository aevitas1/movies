import './index.scss';
import Header from "./Header";
import Navigation from './Navigation';
import PageWrapper from './PageWrapper';
import {MovieProvider} from '../../data/MovieContext';

const Layout = () => (
    <>
        <Header />
        <MovieProvider>
            <Navigation />
            <PageWrapper />
        </MovieProvider>
    </>
)

export default Layout;