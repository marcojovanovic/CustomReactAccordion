import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

import { Link } from 'react-router-dom';

import { RoomContext } from '../RoomProvider'; // import contexta

import RoomsContainer from '../components/RoomsContainer';

function FeatureRooms() {
  const data = React.useContext(RoomContext); // prebacujes context u varijablu

  //console.log(data)

  const {rooms, sortedRooms} =data

  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/rooms" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      <RoomsContainer rooms={rooms} sortedRooms={sortedRooms}/>
      
    </div>
  );
}

export default FeatureRooms;
