import jwt_decode from 'jwt-decode';
import { useState, useEffect, useContext } from 'react';
import {userContext, useUser} from '../store/userContext';


function Authentication () {

  const {user, setUser} = useContext(userContext);

  const user5 = useUser();
  
  function handleCallbackResponse(response){
      const userObject = jwt_decode(response.credential);
      const { name: name, email: email, picture: picture } = userObject;
      const googleUser = {name, email, picture};
      updateUser(googleUser);
      console.log(googleUser);
      

      //setUser(googleUser);
      //console.log(user);
      //const user5 = () => userContext.Provider(googleUser)

      //console.log(googleUser);
      authBackEnd(googleUser);
      // user logged in, hide the login button ***WILL WORK WHEN MOVE setUser to global variable
      //document.getElementById("signInDiv").hidden = true;
  };

  const updateUser = (googleUser) => {
    setUser(googleUser);
  }

  const authBackEnd = async (googleUser) => {
    //console.log(user);
    try {
        const response = await fetch("/api/v1/auth/google", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(googleUser)
        })
        //console.log(response);
    } catch (err) {
        console.error(err.message);
    }
}

  function handleSignOut(event) {
    setUser([]);
    // user logged out, hide the logout button and show login ***WILL WORK WHEN MOVE setUser to global variable
    document.getElementById("btn-signOut").hidden = true;
    //console.log("User: " && user);
    const user = () => userContext({user})
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
        AUTH-User: {user.name}
        </>
    );
}

export default Authentication;
