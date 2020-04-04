import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  

    return (
       
        <div className="background" > 
        <div className="font-weight-bolder mt-4 text-white ">
           <p className="font-weight-bolder  mt-4 text-white h1" style={{letterSpacing:'3px', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Omnialainen kone- ja tuotantotekniikan perustutkinto</p>
          <br></br>
          <br></br>
          <br></br>
         </div>   
         
            <div className="card-deck " >
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">koneasenataja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneasentaja/_OMN2623_1.jpg')} alt="koneasenataja" />
                    
                    <div className="card-body">
                       <div > <p className="card-text">Koneasentajan tehtävä on huolehtia kaikki yksityiskohdat paikalleen ja suoraan. Vastuullista työtä vai mitä? Käytännön tehtävissä asennat, purat ja huollat koneita esimerkiksi tehtaissa, konepajoilla ja rakennustyömailla.</p></div>
                    </div>
                    <div className="card-body">
                        <Link to="/koneasenataja" className="btn btn-dark "style={{borderRadius:'0'}}>Lue lisää tästä tutkinnosta</Link>
                    </div>
                </div>
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Koneautomaatioasentaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneautomaatioasentaja/_OMN2685_3.jpg')} alt="Koneautomaatioasentaja" />
                    <div className="card-body">
                        <p className="card-text">Koneautomaatioasentaja hallitsee yleisellä tasolla automaatiojärjestelmät ja niiden komponentit. Käytännön tehtävissä suoritat mekaanisia asennuksia, ohjelmoit robotteja ja laadit ohjausohjelmia.</p>
                    </div>
                    <div className="card-body">
                        <Link to="/koneautomaatioasentaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä tutkinnosta</Link>
                    </div>
                </div>
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Levyseppähitsaaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/levyseppähitsaaja/_OMN2626_1.jpg')} alt="Levyseppähitsaaja" />
                    <div className="card-body">
                        <p className="card-text ">Levyseppähitsaaja on kädentaitaja, joka hallitsee levytyöt, hitsauksen ja erilaiset metallirakennetyöt. Nimensä mukaisesti levysepäähitsaaja työstää ja hitsaa levyä, joka voi käyttötarkoituksen mukaan olla aivan ohutta tai hyvin paksua.</p>
                    </div>
                    <div className="card-body">
                        <Link to="/levyseppähitsaaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä tutkinnosta</Link>
                    </div>
                </div>
                <div className="card my-auto">

                    <div className="card-header bg-transparent "><h5 className="card-title m-0 p-0">Koneistaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/koneistaja/_OMN2663.JPG')} alt="Koneistaja" />
                    <div className="card-body">
                        <p className="card-text">Koneistajalla on perinteisiä käsityötaitoja, minkä lisäksi hän hallitsee myös työstökoneet. Tietokoneohjattu työstäminen CNC-laitteilla kysyy myös ohjelmointiosaamista. Omniassa koneistajat opiskelevat manuaalisten, sekä tietokoneohjattujen koneiden käyttöä.</p>
                    </div>
                    <div className="card-body">
                        <Link to="/koneistaja" className="btn btn-dark" style={{borderRadius:'0'}}>Lue lisää tästä tutkinnosta</Link>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}