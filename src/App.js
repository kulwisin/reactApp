import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';
import UserDataTable from './userDataTable';
import './App.css';

export default function App() {
  const [myState, setState] = useState([]);
  const previousValue = useRef(null);
  let timerID;

  const getData = async () => {
    await axios.get("https://randomuser.me/api/?results=100").then((response) =>{
      setState(response.data.results)
      previousValue.current = response.data.results;
    })
  }
  
  useEffect(() => {
    getData()
  }, [])

  const handleSearch = (event) => {
    clearTimeout(timerID);
    timerID = setTimeout(() =>{
      const newState = Object.values(previousValue.current).filter(item => item.name.first.toLowerCase().includes(event.target.value.toLowerCase()));
      setState(newState);
    }, 1000)
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="search">
          Search by Name : 
          <input id="search" placeholder="Type..." type="text" onChange={handleSearch} />
        </label>
        <UserDataTable {...myState}/>
        <div className={"recordLength"}>
          <p>Records {myState.length} </p>
        </div>
      </div>
    </div>
  );
};