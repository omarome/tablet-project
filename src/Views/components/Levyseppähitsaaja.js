import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import './../../App.css';

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
             <Link className="LinkText" to= {"/"+company.name}>{company.name}</Link>
         </li> 
        );

      return (
        <div className="container-fluid">  
        <h1 className= "HeaderFont display-3 mt-4">Levyseppähitsaaja</h1>
         <div className="row mt-5">
           <div className="col-md-4 offset-md-1 mt-4">
            <h2 className= "HeaderFont mb-3">Töitä tarjoavat yritykset</h2>
             <ul className="list-group ">
               {companyList}
             </ul>
           </div> 
         <div className="col-md-4 offset-md-2 mt-4">
           <h2 className="HeaderFont mb-3">Levyseppähitsauksen esittelyvideo</h2>  
              <ReactPlayer 
               url="https://www.youtube.com/watch?v=8A_3LpmzVTc&t=14s"
               width="100%"
               controls={true}/>       
            </div>  
         </div>  
       <div className="col-md-4 offset-md-7 mt-5 mb-3">
          <h2 className= "HeaderFont">Tutkinnon osan vaatimukset</h2>
            <div className="MintColoredBorder">
              <p className="HeaderFont mt-2"> 
              Opiskelija osaa: 
              </p>
              <p className="ItalicText"> 
              · Käsitellä hitsaus- ja levytöiden valmistamiseen käytettävien materiaaleja
              </p>
              <p className="ItalicText"> 
              · Käyttää levytyökoneita ja tehdä levytöitä
              </p>
              <p className="ItalicText"> 
              · Tehdä hitsaus- ja levytöiden esivalmistelu- ja viimeistelytyöt
              </p>
              <p className="ItalicText"> 
              · Tehdä hitsaustöitä
              </p>
              <p className="ItalicText">
              · Noudattaa työelämän toimintatapoja ja hitsaus- ja levytöiden työturvallisuusvaatimuksia
              </p>
          </div> 
        </div>                
      </div>
      )
        
    }
}

export default Levyseppähitsaaja;