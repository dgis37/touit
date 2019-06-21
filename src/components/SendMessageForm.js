import React from 'react';
import axios from 'axios';




export default class SendMessage extends React.Component {
  
    
    state = {
        name: '',
        message: ''
      }
    

    changeHandlerName = event => {
        this.setState({ 
            name: event.target.value,

         })
    };

    changeHandlerMessage = event => {
        this.setState({ 
            message: event.target.value, 
         })
    }

    
    
    submitHandler = event => {
        event.preventDefault();
        const name = this.state.name
        const message =  this.state.message
   
        axios.post('http://touiteur.cefim-formation.org/send',  `name=${name}&message=${message}`)
            
    }
    

    render() {
        return (
          <div className=" container py-5 d-flex justify-content-center">
            <form onSubmit={this.submitHandler}>
              
                
                <input className="col-2 rounded-pill" type="text" name="name" placeholder="Name:"  onChange={this.changeHandlerName} />
             
                <input className="col-8 rounded-pill" type="text" message="message" placeholder="Message::" onChange={this.changeHandlerMessage} />
             
              <button className="col-2 btn-success rounded-pill" type="submit">Add</button>

            </form>
          </div>
        )
      }
}

