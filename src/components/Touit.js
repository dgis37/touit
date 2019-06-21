import React from 'react';




class Touit extends React.Component {
  

 
  
  render() {
      const {name, message} = this.props;
      return (
        <div className="App d-flex touit justify-content-center ">
                  <div className="  " >
                 <p>{name}</p>
                 <p>{message}</p>
                 </div>
       </div>
      );
    }
  }


export default Touit;