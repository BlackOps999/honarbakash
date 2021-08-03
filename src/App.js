import logo from './logo.svg';
import './App.css';
import * as REACT from 'react';
import {Button} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';

const API_ENDPOINT = 'https://api.airtable.com/v0/appMXRoWe5ZmkBmoD/Applications';
const API_KEY = '?api_key=keySqgfzmn5S6fYvZ';

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
      };
  default: throw new Error();
  }
};

function App() {

  const [applications, dispatchApplications] = REACT.useReducer(applicationReducer, {data: [], isLoading: false, isError: false});

  const getData = () => { 
      dispatchApplications({type: 'FETCH_INIT'});

      fetch(`${API_ENDPOINT}${API_KEY}`)
        .then((response) => response.json())
        .then((result) => {
          dispatchApplications({
            type: 'FETCH_SUCCESS',
            payload: result.records,
          });
          console.log(result)
        })
        .catch(() => dispatchApplications({type: 'FETCH_FAILURE'})
        );
  };

  

  return (
    <div className="App">
      <div className="container-Navigation">
        <ul className="navigation">
          <li className="logo"><a className="logo" href="#"><img src={logo} className="App-logo" alt="logo" />AB OffPiste</a></li>
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
          <Button variant="outlined" color="primary" onClick={getData}> Hello World2</Button>
          <Button variant="outlined" color="primary" onClick={getData}> Grid</Button>
        </div>
        <div className="item3-Lists">
          {applications.isError && <>Something went wrong...</>}
          {applications.isLoading ? (
              <p>Loading..</p>
              ) : (
              <p>List of Applications: <List list={applications}/></p>
          )}
        </div>
        <div className="item4-Grid">
          {applications.isError && <>Something went wrong...</>}
          {applications.isLoading ? (
              <p>Loading..</p>
              ) : (
              <p>Table of Applications: <Table list={applications}/></p>
          )}
        </div>
    </div>
  </div>
  )
};

const Table = ({list}) => {

  if (Object.keys(list.data).length === 0) 
  {
      return ("No results")
  } else {
      const columns = [
        {field: 'id', headerName: 'id', width: 90},
        {field: 'appName', headerName: 'App Name', editable: true},
        {field: 'State', headerName: 'State', editable: false}
      ];

      const rows = list.data.map((application) => ({
        id: application.id,
        appName: application.fields["App Name"],
        State: application.fields.State,
      }));

      console.log("rows - is array: " + Array.isArray(rows))
      console.log(rows)

      return(
        <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      )
  };
};


/* map function - callback a parent list and output as a list */
const List = ({list}) => {
  console.log('List Component renders');
  //const fields = list.data.map(el => {return el.fields});

  if (Object.keys(list.data).length === 0) 
  {
      return ("No results")
  } else {
      return(
          <ul>
              {list.data.map(({id, ...fields}) => ( //deconstructuring rest example.
                  //console.log(list.data.id)
                  <Item key={id} id={id} {...fields}/> //deconstructuring spread example. Component above (List), is passing object spead ...item. Item component can then deconstruct the object in the title.
              ))}
          </ul>
      )
  }
};

const Item = ({id, ...fields}) => {
  //console.log(id)
  console.log("fields - is array: " + Array.isArray(fields.fields));
  console.log("FieldsState: " + fields.fields["App Name"]);
  
  return (
    <li id={id}>
            <span>{fields.fields["App Name"]}</span><br />          
    </li>
  )
};


export default App;



