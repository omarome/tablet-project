import React, { Component } from "react";
import Mediaplayer from './Mediaplayer';
import './../../App.css';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class Metso extends Component {

  state = {

    company: []

  }

  componentDidMount() {
    this.getCompany();
  }

  getCompany = () => {
    fetch("/metso/")
      .then(response => response.json())
      .then(response => this.setState({ company: response.data }))
      .catch(error => console.log(error))

  }

  render() {
    return (
      <div className="container-fluid">

        <h1 className="HeaderFont display-3 mt-4">Neles</h1>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2 className="HeaderFont mt-3 ">Infoa yrityksestä</h2>
            <div>
              <p>Metso Oyj on suomalainen prosessiteollisuusalan pörssiyritys. Sen asiakkaisiin kuuluvat kaivos-, kivenmurskaus-,</p>
              <p>öljy- ja kaasualoilla ja kierrätyksessä sekä paperi-, sellu- ja prosessiteollisuudessa toimivat yritykset.</p>
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
           <p>Yrityksen kotisivut: <a href="https://www.metso.com/fi/" target="_blank">Neles</a></p>
        </div>           
      </div>
    );
  }
} 

export default Metso;