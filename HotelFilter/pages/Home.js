import React,{} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Room from '../components/Room'
import '../hotel.css'
import {RoomContext} from '../RoomProvider' // import contexta 


function Home() {


 
const data = React.useContext(RoomContext) // prebacujes context u varijablu

  



  return (
    <div>
      <Hero hero='defaultHero'>

        <Banner 
        title='luxurios rooms' 
        subtitle='delux rooms starting at 2.99' 
        
        >
          <Link to='/rooms' className='btn-primary'>Rooms</Link>
          </Banner>
      </Hero>
      <h2 className='text-center m-5'>Featured rooms</h2>
      <div className="featured-rooms-center">
        {data.featuredRooms.map((item) => {
          return <Room key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Home
