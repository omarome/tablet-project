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
          <div class="Main">
            <h1>Planmeca</h1>
            <div class="info">
              <h2>Infoa yrityksestä</h2>
              <div class="text1">{"Planmeca Oy on yksi maailman johtavista hammashoitoteknologiaa valmistavista yhtiöistä, jonka tuotteita viedään noin 120 maahan."}</div>
              <div class="text2">{" Suomalainen, vuonna 1971 perustettu perheyhtiö valmistaa mm. korkean teknologian hammashoitokoneita, 2D- ja 3D-röntgenlaitteita, ohjelmistoja sekä CAD/CAM-ratkaisuja."}</div>
            </div>
            <div class="kotisivu">
              <p>Yrityksen kotisivut: <a href="https://www.planmeca.com/fi/" target="_blank">Planmeca</a></p>
            </div>
            <div class="vaatimukset">
              <h2>Yrityksen vaatimukset</h2>
              <div class="eka">{"Yritykseen vaaditaan..."}</div>
            </div>
            <div class="Mediaplayer">
              <h2>Yrityksen esittelyvideo</h2>
              <Mediaplayer url="https://www.youtube.com/watch?v=g91cYBnkUJY&t=8s" width="100%" height="350%" />
            </div>
          </div>
        );
      }


    
        
   }

export default Planmeca;