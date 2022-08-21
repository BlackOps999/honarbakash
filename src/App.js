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
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';

function App() {

  const [user, setUser] = useState({});
  const clientId = '541789097928-fhs8jv38r9jaqjfe4527ofp4tg8vqjpq.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    console.log('Success: ', res);
  };

  const onFailure = (err) => {
    console.log('Failed: ', err);
  };

  return (
    <> 
      <div className='GoogleLoginBtn'>
        Google Button: <GoogleLogin data-shape="circular" data-size="large" data-type="icon" data-theme="filled_white" clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
      </div>
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



