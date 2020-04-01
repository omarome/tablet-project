import React, { Component } from "react";
import Mediaplayer from './Mediaplayer';
import './../../App.css';
import { Link } from "react-router-dom";

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
        <h1>Neles</h1>
        <div className="info">
          <h2>Infoa yrityksestä</h2>
          <div className="text1">{"Metso Oyj on suomalainen prosessiteollisuusalan pörssiyritys. Sen asiakkaisiin kuuluvat kaivos-, kivenmurskaus-,"}</div>
          <div className="text2">{"öljy- ja kaasualoilla ja kierrätyksessä sekä paperi-, sellu- ja prosessiteollisuudessa toimivat yritykset."}</div>
        </div>
        <div className="kotisivu">
          <p>Yrityksen kotisivut: <a href="https://www.metso.com/fi/" target="_blank">Neles</a></p>
        </div>
        <div className="vaatimukset">
          <h2>Yrityksen vaatimukset</h2>
          <div className="eka">{"Yritykseen vaaditaan..."}</div>
        </div>
        <div className="Mediaplayer">
          <h2>Yrityksen esittelyvideo</h2>
          <Mediaplayer url="https://www.youtube.com/watch?v=g91cYBnkUJY&t=8s" width="100%" height="350%" />
        </div>
      </div>
    );
  }




}
     
     
     

export default Metso;