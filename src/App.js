import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Router, Routes,  Route,  Link} from "react-router-dom";
const App = function (props) {

    return (
        <BrowserRouter>
                 <div className="app-wrapper">
                      <div className='container'>
                          <div className="main-row">
                             <Navbar/>
                              <Routes>
                                  <Route path="/profile/*" element={<Profile posts={props.posts} />}/>
                                  <Route path="/dialogs/*" element={<Dialogs  dialog={props.dialog} message={props.message}/>}/>
                              </Routes>
                          </div>
                      </div>
                </div>
        </BrowserRouter>
    );
}


export default App;
