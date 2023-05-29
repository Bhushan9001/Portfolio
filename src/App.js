import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import SociaLinks from './Components/SocialLinks';

function App() {
  return (
   <div className='bg-gradient-to-tr from-black via-slate-600 to-black '>

   <SociaLinks/>
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
  
   </div>
  );
}

export default App;
