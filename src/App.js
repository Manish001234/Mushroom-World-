import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Allroutes from './components/Allroutes/Allroutes';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Nav/>
<Allroutes/>
<Footer/>
      </div>
  );
}

export default App;
