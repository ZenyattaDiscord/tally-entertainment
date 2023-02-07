import React from "react";
import About from './components/About';
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from './pages/MovieDetail';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/scrollTop";


//main function app
//I chose to export components as functions rather than const 
// the other option is arrow functions so const App = () => {
//  return()
//}
//export default App;


function App() {
  //useLocation gives me the current url of the page
  const location= useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      {/* Animate Presence allows me to detect when a new component is mounted
          and unmounted, triggering animations in a staggered manner*/}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs/>} />
          <Route path='/work' exact element={<OurWork/>}/>
          <Route path="/contactus" exact element={<ContactUs/>} />
          <Route path="/work/:id" exact element={<MovieDetail/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
