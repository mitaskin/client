import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import InformationPost from './infoPost';

const SingleCard = ({p,index,randomPhoto}) => {

    const [active, setActive] = useState(false); //Tag aç kapa
    const [modalShow, setModalShow] = React.useState(false);//information post modal aç kapa

    
    return (
        <div className="card shadow-lg m-1 bg-light text-center" key={index} style={{ width: "20rem" }}>
            <div className="card-header">
                <h5 className="card-title text-uppercase">{p.name}</h5>
            </div>
            <img src={randomPhoto} className="card-img-top" alt="..." />
            <div className="card-body">

                <p className="card-text line-clamp fw-light">{p.price}</p>

                <div className="d-grid gap-2 col-12 mx-auto">
                    <button type='Button' className="btn btn-outline-primary" onClick={() => { setActive(!active) }} >{active === true ? <p className="card-text">{p.tag}</p> : "TAG"}</button>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Daha Fazla</Button>
                </div>

                <InformationPost
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    huhuhu={"test yazi"}
                    p={p}
                />

            </div>
        </div>
    )
}

export default SingleCard