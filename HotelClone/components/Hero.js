import React, {  } from 'react'

function Hero({classname, children}) {
  return (
    <div className={classname}>
      {children}
    </div>
  )
}

export default Hero
