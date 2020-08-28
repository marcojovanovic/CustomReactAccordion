import React,{useState} from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Content from './Content';


function TabsControl() {

 const [key, setKey] = useState('home');


  return (
    <div>
      
  <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
  >
    <Tab eventKey="home" title="Home">
     
    </Tab>
    <Tab eventKey="profile" title="Profile">
       <Content />
    </Tab>
    <Tab eventKey="contact" title="Contact" >
     
    </Tab>
  </Tabs>
      
    </div>
  )
}

export default TabsControl
