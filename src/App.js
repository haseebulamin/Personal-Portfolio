
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Porfolio from './Components/Porfolio/Porfolio';
import Blog from './Components/Blog/Blog';
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Servicess/Services';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  
  return (
    
    <Router>
      <Routes>
      <Route exact  path='/' element={<Hero key="/home" category="home"/>} />
      <Route exact  path='/about' element={ <About key="about" category="about"/>} />
      <Route exact  path='/services' element={<Services key="services" category="services"/>} />
      <Route exact  path='/portfolio' element={<Porfolio key="portfolio" category="portfolio"/>} />
      <Route exact  path='/blog' element={<Blog key="blog" category="blog"/>} />
      <Route exact  path='/pricing' element={<Pricing key="pricing" category="pricing"/>} />
      <Route exact  path='/contact' element={<Contact key="contact" category="contact"/>} />
      </Routes>
    </Router>
    

    
   
  );
}

export default App;
