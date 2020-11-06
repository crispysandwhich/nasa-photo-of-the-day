import React,{useEffect , useState} from 'react'
import  Hero  from './Hero'
import FooterBabe from './components/footer';
import "./App.css";
import {api,defaultKey} from './static'

import axios from "axios";



function App() {


  const [data, setData] = useState([])

  useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}`?  `https://api.nasa.gov/planetary/apod${defaultKey}` :  `https://api.nasa.gov/planetary/apod?api_key=${api}`)
          .then(response => {
              console.log(response)
              setData(response.data)
          })
          .catch(err => {
            
              console.log(err.message)
          })
  },[] )




  console.log(data)







  



  return (
    <div className="App">
      <Hero image={data.hdurl} />
      <FooterBabe title={data.title} explanation={data.explanation}/>
    </div>
  );
}

export default App;
