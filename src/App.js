import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header'


axios
  .get('https://api.nasa.gov/planetary/apod?api_key=56Ascvn1h1GMTauHUlYDfhSE2RvqvSGTazfAQAEp')
  .then(res => {
    console.log(res.data)
  })
  
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://api.nasa.gov/planetary/apod?api_key=56Ascvn1h1GMTauHUlYDfhSE2RvqvSGTazfAQAEp')
        .then(res => {
          setData(res.data)
        })
        .catch(err => {console.log(err)})
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      <Header title={data.title} />
      
    </div>
  );
}

export default App;
