// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCoutries></LoadCoutries>
      
    </div>
  );
}

function LoadCoutries(){

  const [countries, setCountries] =useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div >
      <h1>Welcome to World Tour with React!!!</h1>
      <p>Total Country {countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common} flag={country.flags.png}></Country>)
      }
    </div>
  )

  function Country(props){
    return (
      <div style={{border:'3px solid green', borderradius:'20px', margin:'15px'}}>
        <h3> Name : {props.name}</h3>
        <img src={props.flag} alt="" />
      </div>
    )

  }
}

export default App;
