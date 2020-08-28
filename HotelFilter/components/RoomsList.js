import React from 'react'
import Room from './Room'
function RoomsList({rooms}) {

  if(rooms.length === 0){
  return (
    <div>
      <h2>No rooms for idiot ...</h2>
    </div>
  )
}


return <div className='roomsList'>
  <div className='roomlist-center'>
  <h2 className='text-center m-5'>All rooms</h2>
      <div className="featured-rooms-center">
        {rooms.map((item) => {
          return <Room key={item.id} item={item} />
        })}
      </div>

  </div>
</div>



}



export default RoomsList
