import React, { Component } from "react";

class Hellmaninkonepaja extends Component {

    state = {

        company: []
        
     }
 
     componentDidMount() {
         this.getCompany();
     }
 
     getCompany = () => {
         fetch("/hellmaninkonepaja/")
         .then(response => response.json())
         .then(response => this.setState({ company: response.data }))
         .catch(error => console.log(error))

     }


    
        
   }

export default Hellmaninkonepaja;