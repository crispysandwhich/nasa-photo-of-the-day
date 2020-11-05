import React,{useEffect , useState} from 'react'
import axios from "axios";

const api = '0avHIUOCDyO6rN1DkHeZyEFkaO2LSLwPMewn3Bbb'

function Axios()  {

    const [data, setData] = useState([])

    useEffect( () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}`)
            .then(response => {
                setData(response.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    },[] )
    console.log(data)

    return( 
        <div className='photoBox'>
            <img src={data.hdurl} />
        </div>
     )
}
console.log(Axios)

export default Axios;