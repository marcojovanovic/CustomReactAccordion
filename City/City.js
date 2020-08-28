import React, {useState} from 'react'

import '../App.css'


function City({city, handleClose}) {


  const [toggled, setToggled]=useState(true)
  const [done, setDone]=useState(false)

  const toggleInfo=()=>{

    setToggled(!toggled)


  }

  const handleChange=()=>{


      setDone(!done)

      console.log(done)

  }

  const{name, info, id}=city
  return (
    <>
 
 <div className='col-md-4 mt-5'>
<div className="card">
  <span onClick={()=>handleClose(id)} className='card-close'>X</span>
    <img src={city.img} className="card-img-top card-my" alt="" />
     <div className="card-body">
   <span className={`${done ? 'line-through': 'card-title' }`}>{name}</span><span className='ml-5'>
      <input type='checkbox' 
       value={done}
       onChange={handleChange}
      
      />
  </span>
    <h6 className="card-sub-title"></h6>
  

    <button onClick={toggleInfo} className="btn btn-primary">Show Info</button>

   {toggled && <p className="card-text mt-4">{info}</p>}
</div>
</div>
</div>



    </>
  )
}

export default City
