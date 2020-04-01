import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Secondpage.css";

class Koneistaja extends Component {
     
    state = {
       companies: []
       
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = () => {
        fetch("/koneistaja/")
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
        <div className="container-fluid">  
        <h1 className= "Otsikko display-3 mt-4">Koneistaja</h1>
         <div className="row mt-5">
           <div className="col-md-4 offset-md-1 mt-3">
            <h2 className= "Otsikko mb-3">Töitä tarjoavat yritykset</h2>
             <ul className="list-group ">
               {companyList}
             </ul>
           </div> 
         <div className="col-md-4 offset-md-2 mt-4">
           <h2 className="Otsikko mb-3">Koneistuksen esittelyvideo</h2>  
              <ReactPlayer 
               className="Bordertwo"
               url="https://www.youtube.com/watch?v=8A_3LpmzVTc&t=14s"
               width="100%"
               controls={true}/>       
            </div>  
         </div>  
       <div className="col-md-4 offset-md-7 mt-5 mb-3">
          <h4 className= "Otsikko">Tutkinnon-osan vaatimukset</h4>
            <div className="Border">
              <p className="Otsikko mt-2"> 
              Opiskelija osaa: 
              </p>
              <p className="Teksti"> 
              · Suunnitella koneistustyönsä ja hyödyntää työssään piirustuksia ja teknisiä dokumentteja
              </p>
              <p className="Teksti"> 
              · Valmistaa koneistettavia kappaleita käyttäen kärkisorveja, jyrsinkoneita, porakoneita sekä CNC-
              ohjattua työstökonetta.
              </p>
              <p className="Teksti"> 
              · Mitata mekaanisilla mittavälineillä ja laatia mittauspöytäkirjan
              </p>
              <p className="Teksti"> 
              · Noudattaa työelämän toimintatapoja ja koneistuksen työturvallisuusvaatimuksia
              </p>
          </div> 
        </div>                
      </div> 
      )
        
    }
}

export default Koneistaja;