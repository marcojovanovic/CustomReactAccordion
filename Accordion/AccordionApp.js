import React from 'react'
import Accordion from './Accordion'

import './accordion.css'

function AccordionApp() {

  const accordionData=[


    {
      title:'max programing',
      text: 'Non excepturi impedit. Quia voluptate sint quia. Dicta voluptas et adipisci ex ut earum neque. Autem voluptatibus magni at sapiente laudantium magni alias'
    },
    {
      title:'Dev ed pain',
      text: 'Non excepturi impedit. Quia voluptate sint quia. Dicta voluptas et adipisci ex ut earum neque. Autem voluptatibus magni at sapiente laudantium magni alias'
    },
    {
      title:'Web dev simplefied',
      text: 'Non excepturi impedit. Quia voluptate sint quia. Dicta voluptas et adipisci ex ut earum neque. Autem voluptatibus magni at sapiente laudantium magni alias'
    },

  ]


  return (
    <>

      <h1 className='text-center mt-5'>Custom Accordion</h1>
    <div className='accordion-center'>
      <Accordion data={accordionData} />
    </div>
    </>
  )
}

export default AccordionApp
