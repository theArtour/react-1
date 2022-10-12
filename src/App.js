import logo from './logo.svg';
import './App.css';

const App = function () {
  return (
    <div className="App">
        <Header/>
      <h1>My React App</h1>
       <Technologies/>
    </div>
  );
}
const Technologies = function (){
    return(
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}
const Header = function (){
    return(
        <div className='header' >
            <h2>I am header</h2>
            <a href="https://create-react-app.dev/">react</a>
        </div>
    )
}


export default App;
