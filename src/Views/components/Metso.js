import React, { Component } from "react";
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
      .then(response => this.setState({ company: response.data[0] }))
      .catch(error => console.log(error))

  }

  render() {
    const { company } = this.state;
    return (
      <div className="Main container-fluid">

        <h1 className="header HeaderFont display-3 mt-4">Neles Finland</h1>
        <div className="row mt-5">
          <div className="Lista col-md-4 offset-md-1">
            <h2 className="HeaderFont mt-3 ">Infoa yrityksestä</h2>
            <div className="Infoay">
              <ul>
                <li>Metso Flow Control OY -> Neles Finland OY</li>
                <li>Itsenäinen pörssiyhtiö 1.7.2020 alkaen</li>
                <li>Koneistamo jaettu kolmeen osioon, tiiviste-, suljin- ja
                raskaskoneistus </li>
                <li>Yhteensä n. 60 työstökonetta. Sorveja, jyrsimiä, hiomakoneita ja
                apulaitteistoa (läppäyskoneita jne.)</li>
                <li>Työllistää n. 100 henkilöä</li>
                <li>Tukitoiminnot: ohjelmointi, kehitysorganisaatio (menetelmä,
                laitteistot, prosessit)</li>
                <li>Erikoisuutena kappaleisiin tehtävät pinnoitteet ja niiden koneistus</li>
                <li>Koneistamo palvelee neljää kokoonpanolinjaa (arvovirtaa)</li>
                <ul>
                  <li>Ato, Stock, Special & heavy</li>
                  <li>Lisäksi myös varaosa ja tehtaiden välisen toimitukset kuuluvat koneistamon vastuualueisiin</li>
                </ul>
              </ul>
            </div>
          </div>


          <div className="vaatimukset col-md-5 offset-1 mt-4">
            <h2 className="HeaderFont ">Yrityksen osaamisvaatimukset</h2>
            <div className="eka"><p>"Yritykseen vaaditaan..."</p></div>
          </div>

        </div>

        <div className="Mediaplayer col-md-4 offset-md-1 mt-5">
          <h2 className="HeaderFont">Yrityksen esittelyvideo</h2>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=g91cYBnkUJY&t=8s"
            width="100%"
            controls={true}
            alt="Esittelyvideo yrityksestä" />
        </div>

        <div className="kotisivu">
          <p>Yrityksen kotisivut: <a href="https://www.metso.com/fi/" target="_blank">Neles Finland</a></p>
        </div>
        <div className="kontaktit col-md-4">
          <p>Yrityksen yhteystiedot: {company.address}, {company.contactperson}, {company.number}</p>
        </div>
      </div>
    );
  }
}

export default Metso;