import './App.css';
import{Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/aboutus" element={< AboutUs/>}> </Route>
        <Route path="/contact" element={< Contact/>}> </Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
