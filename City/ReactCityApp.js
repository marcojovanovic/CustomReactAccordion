import React, {useState, useEffect} from 'react'
import {tourData} from '../tourData'
import Navbar from './Navbar'
import City from './City'

function ReactCityApp() {

  
  const [data,setData]=useState([])



  useEffect(()=>{
    setData(tourData)
  },[])


  

  
  const handleClose=(id)=>{

    const filtered = data.filter(item=> item.id !== id)

    setData(filtered)


  }

  return (
    <>
      <Navbar />
      <div className='container'>
       <div className='d-flex justify-content-around'>

     {data.map(city=>(

        <City
        key={data.id} 
        city={city} 
       
        handleClose={handleClose}
        />
      ))}
      </div>
      </div>
     
     

     </>
  )
}

export default ReactCityApp
