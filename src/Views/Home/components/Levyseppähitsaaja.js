import React, { Component } from "react";
import { Link } from "react-router-dom";

class Levyseppähitsaaja extends Component {
     
    state = {
       companies: []
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = () => {
        fetch("/levyseppahitsaaja/")
        .then(response => response.json())
        .then(response => this.setState({ companies: response.data }))
        .catch(error => console.log(error))
    }

    render() {
        const { companies } = this.state;

        const companyList = companies.map((company) =>
         <li className="list-group-item list-group-item-action" key={company.id}>
             <Link to= {"/"+company.name}>{company.name}</Link>
         </li> 
        );

      return (
          <div className="container">  
            <div className="row">
              <div className= "col-md-5 offset-md-8">
                <ul className="list-group">
                  {companyList}
                </ul>
              </div>
            </div>          
          </div>   
      )
        
    }
}

export default Levyseppähitsaaja;