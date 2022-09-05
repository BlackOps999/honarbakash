import {createContext, useContext} from 'react';

const userContext = createContext({});

const useUser = () => useContext(userContext);

export {userContext, useUser};