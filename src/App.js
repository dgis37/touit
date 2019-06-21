import React from 'react';

import './App.css';
import Header from './components/Header';
import SendMessage from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';





class App extends React.Component {
  
  
  

  render() {
   return (
       <div className="App d-flex flex-wrap justify-content-around ">

         <Header/>
         
          <SendMessage/>

         
         <div className="container d-flex justify-content-around col-12">
            <div className="col-3 border">
              
            <Trending/>
            </div>
            <div className="col-9 border">
            <TouitContainer/>
               
            </div>
         </div>
       </div>
     );
  }
}

export default App;
