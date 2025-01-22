import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Grid from './Components/Grid/Grid'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Grid/>}/>
        <Route path='/home' element ={<Home/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
