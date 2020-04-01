import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const mystyle ={
        background:`url( ${require('../../media/Koneasentaja/_OMN2638_1.jpg')})`,
        height: '93vh'
    }

    return (
        <div className="p-5 " style={mystyle}>
            <form className="Border" 
            style={{
                borderColor:'#000000',
                background:'#FFFFFF',
                margin:'10px 100px 10px 100px',
                paddingBottom: ' 20px'
                }}>
                <h1 className="font-weight-bold mt-4">Omnialainen kone- ja tuotantotekniikan perustutkinto</h1>
            </form>
            

            <div className="card-deck d-flex h-100 justify-content-center " >
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title">koneasenataja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneasentaja/_OMN2623_1.jpg')} alt="koneasenataja" />
                    <div className="card-body">
                        <p className="card-text">Koneasentajan tehtävä on huolehtia kaikki yksityiskohdat paikalleen ja suoraan. Vastuullista työtä vai mitä? Käytännön tehtävissä asennat, purat ja huollat koneita esimerkiksi tehtaissa, konepajoilla ja rakennustyömailla.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneasenataja" className="btn btn-primary">Lue lisää</Link>
                    </div>
                </div>
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title">Koneautomaatioasentaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneautomaatioasentaja/_OMN2685_3.jpg')} alt="Koneautomaatioasentaja" />
                    <div className="card-body">
                        <p className="card-text">Koneautomaatioasentaja hallitsee yleisellä tasolla automaatiojärjestelmät ja niiden komponentit. Käytännön tehtävissä suoritat mekaanisia asennuksia, ohjelmoit robotteja ja laadit ohjausohjelmia.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneautomaatioasentaja" className="btn btn-primary">Lue lisää</Link>
                    </div>
                </div>
                <div className="card my-auto">
                    <div className="card-header bg-transparent "><h5 className="card-title">Levyseppähitsaaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/levyseppähitsaaja/_OMN2626_1.jpg')} alt="Levyseppähitsaaja" />
                    <div className="card-body">
                        <p className="card-text">Levyseppähitsaaja on kädentaitaja, joka hallitsee levytyöt, hitsauksen ja erilaiset metallirakennetyöt. Nimensä mukaisesti levysepäähitsaaja työstää ja hitsaa levyä, joka voi käyttötarkoituksen mukaan olla aivan ohutta tai hyvin paksua.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/levyseppähitsaaja" className="btn btn-primary">Lue lisää</Link>
                    </div>
                </div>
                <div className="card my-auto">

                    <div className="card-header bg-transparent "><h5 className="card-title">Koneistaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/koneistaja/_OMN2663.JPG')} alt="Koneistaja" />
                    <div className="card-body">
                        <p className="card-text">Koneistajalla on perinteisiä käsityötaitoja, minkä lisäksi hän hallitsee myös työstökoneet. Tietokoneohjattu työstäminen CNC-laitteilla kysyy myös ohjelmointiosaamista. Omniassa koneistajat opiskelevat manuaalisten, sekä tietokoneohjattujen koneiden käyttöä.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneistaja" className="btn btn-primary">Lue lisää</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}