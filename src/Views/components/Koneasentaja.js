import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import './../../App.css';

class Koneasentaja extends Component {
     
    state = {
       companies: []
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = () => {
        fetch("/koneasentaja/")
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
            <h1 className= "HeaderFont display-3 mt-4">Koneasentaja</h1>
             <div className="row mt-5">
               <div className="col-md-4 offset-md-1 mt-4">
                <h2 className= "HeaderFont mb-3">Töitä tarjoavat yritykset</h2>
                 <ul className="list-group ">
                   {companyList}
                 </ul>
               </div> 
             <div className="col-md-4 offset-md-2 mt-4">
               <h2 className="HeaderFont mb-3">Koneasennuksen esittelyvideo</h2>  
                  <ReactPlayer 
                   url="https://www.youtube.com/watch?v=8A_3LpmzVTc&t=14s"
                   width="100%"
                   controls={true}/>       
                </div>  
             </div>  
           <div className="col-md-4 offset-md-7 mt-5 mb-4">
              <h2 className= "HeaderFont mb-2">Tutkinnon-osan vaatimukset</h2>
                <div className="MintColoredBorder">
                  <p className="HeaderFont mt-2"> 
                  Opiskelija osaa: 
                  </p>
                  <p className="ItalicText"> 
                  · Suunnitella työtään ja hyödyntää mekaanisissa koneenasennuksissa tarvittavia piirustuksia,
                  kuvia ja ohjeita
                  </p>
                  <p className="ItalicText"> 
                  · Tehdä mekaanisia koneasennustöitä ja niihin liittyviä mittauksia
                  </p>
                  <p className="ItalicText"> 
                  · Noudattaa työelämän toimintatapoja ja koneasennuksien työturvallisuusvaatimuksia
                  </p>
              </div> 
            </div>                
          </div>
      )
        
    }
}

export default Koneasentaja;