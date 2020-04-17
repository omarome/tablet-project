import React, { Component } from "react";
import './../../App.css';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class Mesvac extends Component {

    state = {

        company: []
        
     }
 
     componentDidMount() {
         this.getCompany();
     }
 
     getCompany = () => {
         fetch("/mesvac/")
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
                <h2 className="HeaderFont mt-3 ">Infoa yrityksestä</h2>
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
                    <ul>
                      <li>Ato, Stock, Special & heavy</li>
                      <li></li>
                    </ul>
                    <li>Lisätietoa antaa {company.contactperson}, {company.number},  {company.address}</li>
                  </ul>
                </div>
              </div>
    
    
              <div className="vaatimukset col-md-5 offset-1 mt-4">
                <h2 className="HeaderFont ">Yrityksen osaamisvaatimukset</h2>
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
                url=""
                width="100%"
                controls={true}
                alt="Esittelyvideo yrityksestä" />
            </div>
    
            <div className="kotisivu">
              <p>Yrityksen kotisivut: <a className="LinkText" href="" target="_blank">Mesvac</a></p>
            </div>
          </div>
        );
      }
    }

export default Mesvac;