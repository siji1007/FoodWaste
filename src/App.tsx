
import Navbar from './Components/Navbar'; // Assuming Navbar is in the correct directory
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';


function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component  = <Home/>
      break;

    case '/Home':
      component = <Home/>
      break;

    case '/About':
    component = <About/>
    break;

    case '/Contact':
      component = <Contact/>
      break;

    case '/Signin':
      component = <Signin/>
      break;


  }

  return (
    <>
    <Navbar/>
    {component}
    </>
  );
}


export default App;