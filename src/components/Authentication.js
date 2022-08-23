import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';

function Authentication () {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
      //console.log("Encoded JWT token ID: " + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
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
    //let window = [];

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
            <button id="btn-signOut" onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }
        <div className="nav-signIn" id="signInDiv"></div>
        </>
    );
}

export default Authentication;
