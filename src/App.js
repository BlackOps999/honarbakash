import logo from './logo.svg';
import './App.css';
import * as REACT from 'react';
import {Button} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';

const db = require('./persistence');

require('dotenv').config();

const API_USER = process.env.REACT_APP_USER;
const API_PASS = process.env.REACT_APP_PASS;


const applicationReducer = (state, action) => {
  switch (action.type) {
  case 'FETCH_INIT' :
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case 'FETCH_SUCCESS' :
    return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
    };
  case 'FETCH_FAILURE' :
      return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.error,
      };
  default: throw new Error();
  }
};

function App() {

  const [applications, dispatchApplications] = REACT.useReducer(applicationReducer, {data: [], isLoading: false, isError: false});

  const getData = () => { 
      dispatchApplications({type: 'FETCH_INIT'});

      const query = ``

      fetch(query)
        .then((response) => response.json())
        .then((result) => {
          dispatchApplications({
            type: 'FETCH_SUCCESS',
            payload: result.records,
          });
          console.log(result)
        })
        .catch((error) => {
          dispatchApplications({
              type: 'FETCH_FAILURE',
              error: error.message,
          });
          console.log(error.message)
        });
  };



  return (
    <div className="App">
      <div className="container-Navigation">
        <ul className="navigation">
          <li className="logo"><a className="logo" href="#"><img src={logo} className="App-logo" alt="logo" />ABlack Magic</a></li>
          <li className="item-Nav"><a href="">Home</a></li>
          <li className="item-Nav"><a href="">About</a></li>
          <li className="item-Nav"><a href="">Beta Zone</a></li>
        </ul>
      </div>
      <div className="container-Body">
        <div className="item1-Image">
          hello
        </div>
        <div className="item2-Links">
          <Button variant="outlined" color="primary"> Hello World2</Button>
        </div>
    </div>
  </div>
  )
};



export default App;



