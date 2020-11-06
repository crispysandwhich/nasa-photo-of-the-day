import React,{useEffect , useState} from 'react'
import  Hero  from './Hero'
import "./App.css";

import axios from "axios";

const api = '0avHIUOCDyO6rN1DkHeZyEFkaO2LSLwPMewn3Bbb'



function App() {


  const [data, setData] = useState([])

  useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}`)
          .then(response => {
              console.log(response)
              setData(response.data)
          })
          .catch(err => {
            debugger
              console.log(err.message)
          })
  },[] )




  console.log(data)











  return (
    <div className="App">
      <Hero image={data.hdurl}/>
    </div>
  );
}

export default App;
