import React from 'react';
import Api from '../touitApi/Api';






class Trending extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          donnee: [

          ],
         
        };
        
      }

      componentDidMount() {

        Api.getTrending((data) =>  this.setState({donnee: data}));
        
       // this.state.donnee.sort((a,b)=>b[1]-a[1])
        
      }
      
      render() {
        
        const  arr = Object.keys(this.state.donnee).map((key) => [key, this.state.donnee[key]]).sort((a,b)=>b[1]-a[1]);
                
        console.log(arr.sort((a,b)=>b[1]-a[1]))
        
     
        return (

            // <div className="container d-flex justify-content-around border flex-wrap-reverse align-item-center ">
            //          {arr.map(arr => (
            //            <div key={arr.key} className="container col-3 border touit ">
            //                <div className="border">         pour trier  .sort((a,b)=>b[1]-a[1])
            //               {arr}
            //               </div>
                         
            //              </div>
            //          ))}
            //       </div>
                  <div className="container zone-de-reception rounded d-flex flex-wrap justify-content-around col-12 ">
                  {
                      arr.map((mot, index) => <div className="trend col-5" key={index}>{mot[0]}</div>)
                     
                  }
              </div>
        );
      }
}

export default Trending;