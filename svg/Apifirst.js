// import React, {Component} from 'react';
// import SendMessage from '../components/SendMessageForm';


// export default class MyComponent extends React.Component {

    

//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         touits: []
//       };
      
//     }
  
//     componentDidMount() {
//       fetch("http://touiteur.cefim-formation.org/list")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log(result)
//             this.setState({
//               isLoaded: true,
//               touits: result.messages
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {   
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
    
//     render() {


//       const { error, isLoaded, touits } = this.state;
      
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//             <div className="container d-flex justify-content-around border flex-wrap-reverse align-item-center ">
//             {touits.map(touit => (
//               <div key={touit.id} className="container col-3 border touit ">
//                   <div className="border">
//                  {touit.name}
//                  </div>
//                  <div>
//                  {touit.message}
//                  </div>
//                 </div>
//             ))}
//           </div>
//         );
//       }
//     }
//   }

