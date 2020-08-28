import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'


function Room({item}) {

 const {name, slug, images, price}=item

 //console.log(slug)

  return (
    <article className='room'>

<div className='img-container mt-2'>
      <img src={images[0] || defaultImg} alt='single-room'/>
      <div className='price-top'>
  <h6>${price}</h6>
  <p>per night</p>

      </div>
      <Link className='btn-primary room-link' to={`rooms/${slug}`}>Features</Link>
    </div>

  <p className='room-info'>{name}</p>


    </article>
    
  )
}

export default Room
