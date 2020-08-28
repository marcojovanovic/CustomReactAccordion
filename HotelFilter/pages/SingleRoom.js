import React,{} from 'react'
import { RoomContext } from '../RoomProvider'; // import contexta
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link, useParams} from 'react-router-dom'
import StyledHeader from '../components/StyledHeader'

function SingleRoom() {

  const data = React.useContext(RoomContext); // prebacujes context u varijablu

  let { slug } = useParams();

  const {getRoom} = data

  const room = getRoom(slug)

  

  
  // ako nema sobe, samo tako moze da se odradi destructure

 if(!room){

  return(
    <div className='error'>
      <h3>no such room ...</h3>
      <Link to='/rooms' className='btn-primary'>
        back to rooms
      </Link>
    </div>
  )

 }

const {name, description, capacity, breakfast, pets, images, size, price} = room



  return (
    <div>
    <StyledHeader img={images[0]}>
        <Banner title={slug}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHeader>
      <div className='single-room'>
       <div className='single-room-images'>
         {images.map((item,index)=>{

            return <img key={index} src={item} alt='' />

         })}
         </div> 
         <div className='single-room-info'>
           <article className='desc'>
             <h3>details</h3>
        <p>{description}</p>
           </article>
           <article className='info'>
            <h3>info</h3>
        <h5>price: ${price}</h5>
        <h5>size: ${size} SQFT</h5>
        <h5>max capacity: {capacity} people</h5>
        <h5>{pets ? 'pets allowed' : 'pets are not allowed'}</h5>
           </article>
        <h5>{breakfast && 'free breakast included'}</h5> 
         </div>
      </div>
    </div>
  )
}

export default SingleRoom
