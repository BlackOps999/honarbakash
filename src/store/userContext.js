import {createContext, useContext} from 'react';

const userContext = createContext(null);

const useUser = () => useContext(userContext);

export {userContext, useUser};