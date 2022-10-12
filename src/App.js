import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies  from './technologies'
const App = function () {
  return (
    <div className="App">
        {/*<Header/>*/}
        <Header/>
      <h1>My React App</h1>
        <Technologies/>
    </div>
  );
}




export default App;
