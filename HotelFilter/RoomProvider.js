import React, { createContext, useState, useEffect } from 'react'
 
 import items from './data'
export const RoomContext = createContext() // izvoz za komponente
 
const RoomProvider = ({children}) => {
 
  const [rooms, setRooms]=useState([])
  const [sortedRooms, setSortedRooms]=useState([])
  const [featuredRooms, setFeaturedRooms]=useState([])
  const [type, setType]=useState('all')
  let [capacity, setCapacity]=useState(1)
  const [price, setPrice]=useState(0)
  const [minPrice, setMinPrice]=useState(0)
  const [maxPrice, setMaxPrice]=useState(0)
  const [minSize, setMinSize]=useState(0)
  const [maxSize, setMaxSize]=useState(0)
  const  [pets, setPets]=useState(false)
 

  const FormatData = ()=>{

    let tempItems = items.map(item=>{

      let id = item.sys.id 
      let images = item.fields.images.map(image=> image.fields.file.url)

     

      let room = {...item.fields, images, id}

      return room
  
  
     })

     return tempItems
  }
 




 useEffect(()=>{

   let rooms = FormatData(items)


   let featuredRooms = rooms.filter(room=> room.featured === true )

    setRooms(rooms)
    
    setFeaturedRooms(featuredRooms)

    setSortedRooms([...rooms])

    let maxPrice = Math.max(...rooms.map(item=> item.price))


    let maxSize = Math.max(...rooms.map(item=> item.size))

    setMaxPrice(maxPrice)
    setMaxSize(maxSize)

    console.log(sortedRooms)


 },[])







  

  const handleType = (e)=>{

   const target = e.target 
   const value = e.type === 'checkbox' ? target.checked : target.value 

   const name = e.target.name 


    setType(value)
   

    
  }



  const handleCapacity = (e)=>{

    setCapacity(e.target.value)


  }

  const handlePrice=(e)=>{

    setPrice(e.target.value)

  }

useEffect(()=>{

filterRooms()


},[type])

useEffect(()=>{

filterRooms()


},[])


useEffect(()=>{

filterRooms()


},[ capacity])



useEffect(()=>{

filterRooms()


},[price])


useEffect(()=>{

filterRooms()


},[pets])


  const filterRooms=()=>{

    console.log(rooms)

    let tempRooms = [...rooms]

    if(type !== 'all'){

       tempRooms = tempRooms.filter(room=> room.type === type)
      
    } 

    

      capacity = parseInt(capacity)

     if(capacity !== 1){

       tempRooms = tempRooms.filter(room=> room.capacity >= capacity)
     } 


     tempRooms = tempRooms.filter(room=> room.price <= price)

     tempRooms = tempRooms.filter(room=>room)

     if(pets){

      tempRooms = tempRooms.filter(room=> room.pets === true)

     }
    
    
     setSortedRooms(tempRooms)
  

  }

  function getRoom(slug){

    let tempRooms = [...rooms]

    const room = tempRooms.find((item)=>item.slug === slug)

    return room




  }

  const handlePets = (e)=>{


    setPets(e.target.checked)
  }
  

  return (
    <RoomContext.Provider
      value={{rooms, sortedRooms, getRoom, featuredRooms, handleType, type, price, pets, capacity, minSize, maxSize, minPrice, maxPrice, handleCapacity, handlePrice, handlePets
         

      }}
    >
      {children}
    </RoomContext.Provider>
  )
}
 
export {RoomProvider} // izvoz za index.js