import React, {Component} from 'react';
import Touit from './Touit.js'




class TouitContainer extends React.Component {
  
    
    

  render() {
   return (
    <div className="container Touit  py-5 zone-de-reception rounded   " id="zoneDeReception">
        <Touit/>
    </div>
     );
  }
}

export default TouitContainer;