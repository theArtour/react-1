import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import Post from "./Components/Posts/Post";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = function () {
    return (
        <div className="app-wrapper">
              <div className='container'>
                  <div className="main-row">
                     <Navbar/>
                    {/*<Main/>*/}
                    {/*  <main className='mainSection' >*/}
                    {/*      <Post message='My first post in this site'/>*/}
                    {/*      <Post message='Hello everyone'/>*/}
                    {/*      <Post message='How are you'/>*/}
                    {/*  </main>*/}
                      <Dialogs/>
                  </div>
              </div>
        </div>
    );
}



export default App;
