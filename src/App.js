import React,{useEffect , useState} from 'react'
import  Hero  from './Hero'
import FooterBabe from './components/footer';
import "./App.css";

import axios from "axios";

const api = '0avHIUOCDyO6rN1DkHeZyEFkaO2LSLwPMewn3Bbb'
const defaultKey = `?api_key=${api}&date=2020-07-12`

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
      <FooterBabe title={data.title} />
    </div>
  );
}

export default App;
