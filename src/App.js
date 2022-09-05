import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState} from 'react';
import './App.css';
import Home from './components/pages/Home';
import Publications from './components/pages/Publications';
import Bio from './components/pages/Bio';
import ContactMe from './components/pages/ContactMe';
import RhythmAI from './components/pages/RhythmAI';
import Services from './components/pages/Services';
import { userContext } from './store/userContext';
import {CheckLoggedIn} from "./auth/CheckLoggedIn";


function App() {

  const [user, setUser] = useState({});

  CheckLoggedIn(setUser).catch(console.error);
  
  return (
    <>
      <userContext.Provider value={{user, setUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Publications" element={<Publications/> } />
            <Route path="/Bio" element={<Bio/>} />
            <Route path="/ContactMe" element={<ContactMe/>} />
            <Route path="/RhythmAI" element={<RhythmAI/>} />
            <Route path="/Services" element={<Services/>} />
          </Routes>
          <Footer />  
        </Router>
      </userContext.Provider>
    </>
  )
}

export default App;



