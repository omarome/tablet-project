import React, { Component } from "react";

class Planmeca extends Component {

    state = {

        company: []
        
     }
 
     componentDidMount() {
         this.getCompany();
     }
 
     getCompany = () => {
         fetch("/planmeca/")
         .then(response => response.json())
         .then(response => this.setState({ company: response.data }))
         .catch(error => console.log(error))

     }


    
        
   }

export default Planmeca;