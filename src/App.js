import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Publications from './components/pages/Publications';
import Bio from './components/pages/Bio';
import ContactMe from './components/pages/ContactMe';
import RhythmAI from './components/pages/RhythmAI';
import Services from './components/pages/Services';
import jwt_decode from "jwt-decode";

function App() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
      //console.log("Encoded JWT token ID: " + response.credential);
      const userObject = jwt_decode(response.credential);
      //console.log(userObject);
      setUser(userObject);
      // user logged in, hide the login button ***WILL WORK WHEN MOVE setUser to global variable
      //document.getElementById("signInDiv").hidden = true;
  };

  function handleSignOut(event) {
    setUser({});
    // user logged out, hide the logout button and show login ***WILL WORK WHEN MOVE setUser to global variable
    document.getElementById("btn-signOut").hidden = true;
    //console.log("User: " && user);
  };

  useEffect(() => {
    /* global google script from index.html */
    google.accounts.id.initialize({
      client_id: "541789097928-fhs8jv38r9jaqjfe4527ofp4tg8vqjpq.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "filled_white", size: "large", shape: "circle", type: "icon"}
    );

    google.accounts.id.prompt();

  }, []);

  return (
    <> 
      {Object.keys(user).length != 0 &&
        <button id="btn-signOut" onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Publications" element={<Publications/>} />
          <Route path="/Bio" element={<Bio/>} />
          <Route path="/ContactMe" element={<ContactMe/>} />
          <Route path="/RhythmAI" element={<RhythmAI/>} />
          <Route path="/Services" element={<Services/>} />
        </Routes>
        <Footer />  
      </Router>
    </>
  )
}

export default App;



