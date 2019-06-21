import React from 'react';
import Touit from './Touit.js';
import Api from '../touitApi/Api';





class TouitContainer extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          touit: [],
          time: 0
        };
        
        
      }
      

      componentDidMount() {
        
        Api.getMessage(0,(data) =>  this.setState({touit: data.messages}));
        setInterval(() => this.setState({ time: Date.now()}), 3000)
      }
      
      
     
    
    

  render() {
    const {touit} = this.state;

   return (
    <div className="container   py-5 zone-de-reception rounded d-flex flex-wrap-reverse justify-content-around col-12   " id="zoneDeReception">
        {touit.map((touit, index ) => <Touit className="touit" key={index} {...touit} />)}
    </div>
     );
  }
}

export default TouitContainer;