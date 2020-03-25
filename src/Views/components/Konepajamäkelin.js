import React, { Component } from "react";

class Konepajamäkelin extends Component {

    state = {

        company: []
        
     }
 
     componentDidMount() {
         this.getCompany();
     }
 
     getCompany = () => {
         fetch("/konepajamakelin/")
         .then(response => response.json())
         .then(response => this.setState({ company: response.data }))
         .catch(error => console.log(error))

     }


    
        
   }

export default Konepajamäkelin;