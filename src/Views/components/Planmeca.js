import React, { Component } from "react";
import Mediaplayer from './Mediaplayer';
import './../../App.css';

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

     render() {
      return (
        <div className="container-fluid">
  
          <h1 className="HeaderFont display-3 mt-4">Planmeca</h1>
          <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
              <h2 className="HeaderFont mt-3 ">Infoa yrityksestä</h2>
              <div>
                <p>Planmeca Oy on yksi maailman johtavista hammashoitoteknologiaa valmistavista yhtiöistä, jonka tuotteita viedään noin 120 maahan. </p>
                <p>Suomalainen, vuonna 1971 perustettu perheyhtiö valmistaa mm. korkean teknologian hammashoitokoneita, 2D- ja 3D-röntgenlaitteita, ohjelmistoja sekä CAD/CAM-ratkaisuja.</p>
             </div>
            </div>
            
            
            <div className="col-md-5 offset-1 mt-4">
              <h2 className="HeaderFont ">Yrityksen vaatimukset</h2>
            <div className="eka"><p>"Yritykseen vaaditaan..."</p></div>
          </div>
          
          </div>
  
          <div className="Mediaplayer col-md-4 offset-md-1 mt-5">
            <h2 className="HeaderFont">Yrityksen esittelyvideo</h2>
            <Mediaplayer
             url="https://www.youtube.com/watch?v=g91cYBnkUJY&t=8s" 
             width="100%" 
             height="350%" />
          </div>
          
          <div className="kotisivu">
             <p>Yrityksen kotisivut: <a href="https://www.planmeca.com/fi/" target="_blank">Planmeca</a></p>
          </div>           
        </div>
      );
    }


    
      
   }

export default Planmeca;