import jwt_decode from 'jwt-decode';
import { useState, useEffect, useContext } from 'react';
import {userContext, useUser} from '../store/userContext';

function Authentication () {

  const {user, setUser} = useContext(userContext);
 
  function handleCallbackResponse(response){
      const userJWTObject = jwt_decode(response.credential);
      const { name: name, email: email, picture: picture, exp: expiry, sub: googleID } = userJWTObject;
      const googleUser = {name, email, picture, expiry, googleID, response};
      //console.log(response);
      //console.log(googleUser);
      
      //Update global user CONTEXT
      updateUser(googleUser);
      //Update database with user login details      
      authBackEnd(googleUser);
      //hide login button
      document.getElementById("signInDiv").hidden = true;
  };

  const updateUser = (googleUser) => {
    setUser(googleUser);
  }

  const authBackEnd = async (googleUser) => {
    //console.log(googleUser.googleID);
    try {
        const response = await fetch("/api/v1/auth/google", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            token: (googleUser.googleID),
            body: JSON.stringify(googleUser)
        })
        //console.log(response);
    } catch (err) {
        console.error(err.message);
    }
}

  function handleSignOut(event) {
    setUser([]);
    //window.google.accounts.id.disableAutoSelect();
    // user logged out, hide the logout button and show login ***WILL WORK WHEN MOVE setUser to global variable
    document.getElementById("btn-signOut").hidden = true;
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    /*global google*/
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_OAUTH2CLIENTID,
      clientSecret: process.env.REACT_APP_OAUTH2SECRET,
      callback: handleCallbackResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "filled_white", size: "large", shape: "circle", type: "icon"}
    );

    window.google.accounts.id.prompt();

  }, []);

    return (
        <>
        {Object.keys(user).length !== 0 &&
            <button id="btn-signOut" onClick={(e) => handleSignOut(e)}>{user.name} - Sign Out</button>
        }
        <div className="nav-signIn" id="signInDiv"></div>
        </>
    );
}

export default Authentication;
