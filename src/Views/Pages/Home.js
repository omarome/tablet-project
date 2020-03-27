import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const mystyle ={
        background:`url( ${require('../../media/Koneasentaja/_OMN2638_1.jpg')})`,
    }

    return (
        <div className="p-5 " style={mystyle}>

            <div className="card-deck">
                <div className="card">
                    <div className="card-header bg-transparent "><h5 className="card-title">koneasenataja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneasentaja/_OMN2623_1.jpg')} alt="koneasenataja" />
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneasenataja" className="btn btn-primary">Read more</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-transparent "><h5 className="card-title">Koneautomaatioasentaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/Koneautomaatioasentaja/_OMN2685_3.jpg')} alt="Koneautomaatioasentaja" />
                    <div className="card-body">
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneautomaatioasentaja" className="btn btn-primary">Read more</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-transparent "><h5 className="card-title">Levyseppähitsaaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/levyseppähitsaaja/_OMN2626_1.jpg')} alt="Levyseppähitsaaja" />
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/levyseppähitsaaja" className="btn btn-primary">Read more</Link>
                    </div>
                </div>
                <div className="card">

                    <div className="card-header bg-transparent "><h5 className="card-title">Koneistaja</h5></div>
                    <img className="card-img-top" style={{ height: '150px' }} src={require('../../media/koneistaja/_OMN2663.JPG')} alt="Koneistaja" />
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                        <Link to="/koneistaja" className="btn btn-primary">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}