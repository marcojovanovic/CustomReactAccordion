import React,{useState} from 'react'

function AccordionItem({title, text}) {


   const [open, setOpen]=useState(false)


   const toggleOpen = ()=>{

      setOpen(!open)

   }

  return (
    <div className='accordion-item'>
      <div className='accordion-head' onClick={toggleOpen}>

         <h3>{title}</h3>
      </div>
      <div className={`accordion-body ${open  ? 'open' : 'hidden'}`}>

         <h3>{text}</h3>
      </div>
       
       
    </div>
  )
}

export default AccordionItem
