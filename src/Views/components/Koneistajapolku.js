import React, { Component } from "react";
import './../../App.css';

class Koneistajapolku extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1 className="HeaderFont display-3 mt-4" >Koneistajan polku</h1>
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
                            <li><a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906424" target="_blank">Koneistus 30 osp</a> (pakollinen tutkinnonosa)</li>
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
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906203"
                            target="_blank">Manuaalikoneistus 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906420"
                            target="_blank">Moniakselinen CNC- koneistus 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906426"
                            target="_blank">CAD/CAM ohjelmointi 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906428"
                            target="_blank">CNC- sorvaus 20 osp</a>
                        <br></br>
                        <a className="LinkText" href="https://eperusteet.opintopolku.fi/#/fi/esitys/3855075/reformi/tutkinnonosat/3906202"
                            target="_blank">CNC- jyrsintä 20 osp</a>
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

export default Koneistajapolku;