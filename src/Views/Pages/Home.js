import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  

    return (
       
        <div className="background" > 

        
           <p className="omnialainenKjaTP" >Omnialainen kone- ja tuotantotekniikan perustutkinto</p>
         

         <div className="allCards">
            <div className="card-deck " style={{ height: '600px' }} >
                <div className="card ">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Koneasentaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneasentaja/_OMN2623_1.jpg')} alt="koneasenataja" />
                    
                    <div className="card-body">
                       <div > <p className="card-text">Koneasentajan tehtävä on huolehtia kaikki yksityiskohdat paikalleen ja suoraan. Vastuullista työtä vai mitä? Käytännön tehtävissä asennat, purat ja huollat koneita esimerkiksi tehtaissa, konepajoilla ja rakennustyömailla.</p></div>
                    </div>
                    <div className="cardbutton" >
                        <p><a className="btn btn-dark" href="https://eperusteet.opintopolku.fi/#/fi/amops/594966/osa/1257056" target="blank" style={{borderRadius:'0'}}>Koneasentajan polku</a></p>
                        <p><Link to="/koneasenataja" className="btn btn-dark "style={{borderRadius:'0'}}>Lue lisää tästä ammattinimikkeestä</Link></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Koneautomaatioasentaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneautomaatioasentaja/_OMN2685_3.jpg')} alt="Koneautomaatioasentaja" />
                    <div className="card-body">
                        <p className="card-text">Koneautomaatioasentaja hallitsee yleisellä tasolla automaatiojärjestelmät ja niiden komponentit. Käytännön tehtävissä suoritat mekaanisia asennuksia, ohjelmoit robotteja ja laadit ohjausohjelmia.</p>
                    </div>
                    <div className="cardbutton">
                        <p><a className="btn btn-dark" href="https://eperusteet.opintopolku.fi/#/fi/amops/594966/osa/1257057" target="_blank" style={{borderRadius:'0'}}>Koneautomaatioasentaja polku</a></p>
                        <p><Link to="/koneautomaatioasentaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä ammattinimikkeestä</Link></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Levyseppähitsaaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/levyseppähitsaaja/_OMN2626_1.jpg')} alt="Levyseppähitsaaja" />
                    <div className="card-body">
                        <p className="card-text ">Levyseppähitsaaja on kädentaitaja, joka hallitsee levytyöt, hitsauksen ja erilaiset metallirakennetyöt. Nimensä mukaisesti levyseppähitsaaja työstää ja hitsaa levyä, joka voi käyttötarkoituksen mukaan olla aivan ohutta tai hyvin paksua.</p>
                    </div>
                    <div className="cardbutton">
                            <p><a className="btn btn-dark" href="https://eperusteet.opintopolku.fi/#/fi/amops/594966/osa/1257055" target="_blank" style={{borderRadius:'0'}}>Levyseppähitsaajan polku</a></p>
                        <p><Link to="/levyseppähitsaaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä ammattinimikkeestä</Link></p>
                    </div>
                </div>
                <div className="card ">

                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Koneistaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/koneistaja/_OMN2663.JPG')} alt="Koneistaja" />
                    <div className="card-body">
                        <p className="card-text">Koneistajalla on perinteisiä käsityötaitoja, minkä lisäksi hän hallitsee myös työstökoneet. Tietokoneohjattu työstäminen CNC-laitteilla kysyy myös ohjelmointiosaamista. Omniassa koneistajat opiskelevat manuaalisten sekä tietokoneohjattujen koneiden käyttöä.</p>
                    </div>
                    <div className="cardbutton">
                        <p><a to="/Koneistajapolku" href="https://eperusteet.opintopolku.fi/#/fi/amops/594966/osa/795113" target="_blank" className="btn btn-dark" style={{borderRadius:'0'}}>Koneistajan polku</a></p>
                        <p><Link to="/koneistaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä ammattinimikkeestä</Link></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        
    )
}