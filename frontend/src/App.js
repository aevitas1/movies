import Header from './components/navigation/header';
import Pagewrapper from "./pages/Pagewrapper";
import { MovieProvider } from "./data/MovieContext";

function App() {
  // console.log(console.clear());
  return (
    <>
      <div className="page-outer-wrapper">
        <MovieProvider>
          <Header />
          <Pagewrapper />
        </MovieProvider>
      </div>
    </>
  )
}

export default App;
