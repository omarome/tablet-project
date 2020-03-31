import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Secondpage.css";


class Koneautomaatioasentaja extends Component {
  
     
    state = {
       companies: []
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = () => {
        fetch("/koneautomaatioasentaja/")
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
            <h1 className= "Otsikko display-4 mt-4">Koneautomaatioasentaja</h1>
             <div className="row mt-5">
               <div className="col-md-4 offset-md-1 mt-3">
                <h2 className= "Otsikko mb-3">Töitä tarjoavat yritykset</h2>
                 <ul className="list-group ">
                   {companyList}
                 </ul>
               </div> 
             <div className="col-md-4 offset-md-2 mt-4">
               <h2 className="Otsikko mb-3">Koneautomaatioasennuksen esittelyvideo</h2>  
                  <ReactPlayer 
                   className="Bordertwo"
                   url="https://www.youtube.com/watch?v=8A_3LpmzVTc&t=14s"
                   width="100%"
                   controls={true}/>       
                </div>  
             </div>  
           <div className="col-md-4 offset-md-7 mt-5 mb-4">
              <h4 className= "Otsikko">Tutkinnon-osan vaatimukset</h4>
                <div className="Border">
                  <p className="Otsikko mt-2"> 
                  Opiskelija osaa: 
                  </p>
                  <p className="Teksti"> 
                  · Suunnitella koneautomaatioasennustyönsä ja hyödyntää koneautomaation asennustöissä
                  piirustuksia, teknisiä dokumentteja ja kytkentäkaavioita
                  </p>
                  <p className="Teksti"> 
                  · Soveltaa koneautomaatioasennuksissa tarvittavaa sähkötekniikkaa 
                  ja sähkötyöturvallisuusvaatimuksia sekä pneumatiikan ja hydrauliikan perusteita
                  </p>
                  <p className="Teksti"> 
                  · Tehdä koneautomaatioasennuksia ja hallitsee niihin liittyvät kaapeloinnit ja ohjauksen
                  </p>
                  <p className="Teksti"> 
                  · noudattaa työelämän toimintatapoja ja koneautomaatioasennuksien työturvallisuusvaatimuksia
                  </p>
              </div> 
            </div>                
          </div>
      )
        
    }
}

export default Koneautomaatioasentaja;