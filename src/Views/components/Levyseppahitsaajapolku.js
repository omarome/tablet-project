import React, { Component } from "react";
import './../../App.css';

class Levyseppahitsaajapolku extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1 className="HeaderFont display-3 mt-4" >Levyseppähitsaajan polku</h1>
                </div>

                <div className="keskitetty">
                    <div className="polkulista">
                        <div className="polkuvuosi">
                            <p>1. vuosi 35 + 20 osp</p>
                        </div>
                        <ul>
                            <li><a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906209"
                                target="_blank">Asennus- ja automaatiotyöt, 10 osp</a> (pakollinen tutkinnonosa)</li>
                            <li><a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906311"
                                target="_blank">Valmistustyötehtävissä toimiminen, 25 osp</a> (pakollinen tutkinnonosa)</li>
                            <li className="hiddenlist"><p className="yto">Yhteiset tutkinnon osat 20 osp</p></li>
                        </ul>
                        <div className="polkuvuosi">
                            <p>2. vuosi 30 + 20 + 15 osp</p>
                        </div>
                        <ul>
                            <li><a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3870029" target="_blank">Hitsaus- ja levytyöt 30 osp</a> (pakollinen tutkinnonosa)</li>
                            <li className="hiddenlist">15 osp suoritetaan tutkinnon osaan soveltuvalla työpaikalla</li>
                            <li className="hiddenlist" id="style1">Ammatillinen valinnainen 20 osp</li>
                            <li className="hiddenlist" id="style2">Yhteiset tutkinnon osat 15 osp</li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <p className="valinnaiset" id="style3">Ammatilliset valinnaiset</p>
                    </div>
                    <div className="osp">
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906422"
                            target="_blank">Alumiinin ja ruostumattoman teräksen hitsaus, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906208"
                            target="_blank">Hitsaus, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906201"
                            target="_blank">Korjaus- ja asennushitsaus, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906204"
                            target="_blank">Levyjen CNC-leikkaus, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906319"
                            target="_blank">Mekanisoitu ja automatisoitu hitsaus, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906310"
                            target="_blank">Ohutlevytyöt, 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906318"
                            target="_blank">Teräsrakennetyöt, 20 osp </a>
                        <br></br>
                        <br></br>
                        <div>
                            <h1 id="style4">Koko tutkinnon laajuus 180 osp</h1>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Levyseppahitsaajapolku;