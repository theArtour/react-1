import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main";

const App = function () {
    return (
        <div className="app-wrapper">
              <div className='container'>
                  <div className="main-row">
                     <Navbar/>
                    {/*<Main/>*/}
                  </div>
              </div>
        </div>
    );
}



export default App;
