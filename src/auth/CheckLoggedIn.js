import {userContext, useUser} from '../store/userContext';
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.REACT_APP_OAUTH2CLIENTID)

export async function CheckLoggedIn(setUser) {

    const user = useUser();
    console.log(user.user);
    if (user.user){
        if (Object.keys(user.user).length !== 0) {
            const ticket = await client.verifyIdToken({
                idToken: user.user.response.credential,
                audience: process.env.REACT_APP_OAUTH2CLIENTID 
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            //console.log(userid);

            if (userid.length > 0) {
                console.log('user remains logged in')
            } else
            {
                setUser = {};
                console.log('here')
            };
        };
    }
    else{
        console.log('not providing a user object')
    };
};
  
  //how to call the function:
  //checkLoggedIn().catch(console.error);
