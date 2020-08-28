import React,{useContext} from 'react'
import { RoomContext } from '../RoomProvider'; // import contexta


function RoomsFilter() {

  const data = React.useContext(RoomContext); 

  const {handleType, type, pets, minSize, maxSize, minPrice, maxPrice,handleCapacity, rooms, capacity, price, handlePrice, handlePets}=data

  console.log(data)

  const getUnique=(items, value)=>{

       return [... new Set(items.map(item=>item[value]))]

  }

// get unique types

  let types = getUnique(rooms, 'type')

  // add all

  types = ['all', ...types]

  types = types.map((item, index)=>{

  return <option value={item} key={index}>{item}</option>

  })



  let people =getUnique(rooms, 'capacity')

  people = people.map((item, index)=>{

  return <option key={index} value={item}>{item}</option>

  })

  return (
    <div className='filter-container'>
      <form className='filter-form'>
       <div className='form-group'>
         <label htmlFor='type'>room type</label>
         <select 
         name='type' 
         id='type' 
         value={type} 
         className='form-control'
         onChange={handleType}
         >
       
          {types}
         </select>

       </div>

       <div className='form-group'>
         <label htmlFor='capacity'>room type</label>
         <select 
         name='capacity' 
         id='capacity' 
         value={capacity} 
         className='form-control'
         onChange={handleCapacity}
         >
       
          {people}
         </select>

       </div>

       <div className='form-group'>
  <label htmlFor='price'>Price ${price}</label>
      <input 
      type='range' 
      name='range' 
      id='range' 
      value={price}
      className='form-control'
      onChange={handlePrice}
      max={maxPrice}
      min={minPrice}
      
      />
       </div>

      <div className='form-group'>
        <div className='single-extra'>
          <input 
          type='checkbox' 
          name='pets'
          id='pets'
          value={pets}
          checked={pets}
          onChange={handlePets}

          
          />
          <label htmlFor='pets'>Pets</label>

        </div>
        
        
      </div>




      </form>

    </div>
  )
}

export default RoomsFilter
