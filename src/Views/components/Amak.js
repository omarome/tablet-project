import React, { Component } from "react";
import './../../App.css';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class Amak extends Component {

    state = {

        company: []
        
     }
 
     componentDidMount() {
         this.getCompany();
     }
 
     getCompany = () => {
         fetch("/amak/")
         .then(response => response.json())
         .then(response => this.setState({ company: response.data }))
         .catch(error => console.log(error))

     }
     render() {
        const { company } = this.state;
        return (
          <div className="Main container-fluid">
  
          <h1 className="HeaderFont display-3 mt-4">{company.name}</h1>
          <div className="row mt-5">
            <div className="Lista col-md-4 offset-md-1">
            <div className="otsikkoyritykset"><h2 className="HeaderFont mt-3 ">Infoa yrityksestä</h2></div>
              <div className="Infoay">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Lisätietoa antaa {company.contactperson}, {company.number},  {company.address}</li>
                </ul>
              </div>
            </div>
  
  
            <div className="vaatimukset col-md-5 offset-1 mt-4">
            <div className="osavaatimukset"><h2 className="HeaderFont ">Yrityksen osaamisvaatimukset</h2></div>
              <div className="vaatimukset">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
  
          </div>
    
            <div className="Mediaplayer col-md-4 offset-md-1 mt-5">
              <h2 className="HeaderFont">Yrityksen esittelyvideo</h2>
              <ReactPlayer
                className="mb-4"
                url=""
                width="100%"
                controls={true}
                alt="Esittelyvideo yrityksestä" />
            </div>
    
            <div className="kotisivu">
              <p>Yrityksen kotisivut: <a className="LinkText" href="" target="_blank">Amak</a></p>
            </div>
          </div>
        );
      }
    }

export default Amak;