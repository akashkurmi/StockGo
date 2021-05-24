import React, { Component} from 'react'




import axios from "axios";
class Stock extends Component {
  componentDidMount(){

    const options = {
      method: 'GET',
      url: 'https://latest-stock-price.p.rapidapi.com/any',
      headers: {
        'x-rapidapi-key': '5e2d1e13e4mshcdee82a2fa2afd5p1eb8bajsn3dcc5a85a191',
        'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
      
  }
    render() {
        return (
        <div>
         <h1>hello</h1>   
        </div>          
        )
    }
}

export default Stock