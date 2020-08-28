import React from 'react'
import AccordionItem from './AccordionItem'

function Accordion({data}) {



if(data.length > 0){ 


  return (
    <div className='accordion'>
     {data.map(item=>{

     return <AccordionItem title={item.title} text={item.text} /> 

     })}
     
      
    </div>
  ) 
} 
}

export default Accordion
