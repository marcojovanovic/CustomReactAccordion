import React from 'react'

import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

function RoomsContainer({rooms, sortedRooms}) {
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms}/>
    </div>
  )
}

export default RoomsContainer
