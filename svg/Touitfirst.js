import React, {Component} from 'react';
import MyComponent from '../touitApi/Api';



class Touit extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
    touit: 0 
    };
  };
 

  // changeImage = (step)  => {
  //   this.setState({
  //     imageIndex: (this.state.imageIndex + step + this.props.imagelist.length) % this.prop.imagelist.length
  //   });

  // };
  
  render() {
  
      return (
        <div className="App d-flex justify-content-around col-12  flex-wrap-reverse">

        { 
         <MyComponent/>
          }
         
       </div>
      );
    }
  }


export default Touit;