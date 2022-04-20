import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import SingleCard from './SingleCard';


const divStyle = {
    width: '300px', maxHeight: '30rem', objectFit: 'cover'
};



const Slider = () => {

    const [randomPhoto, setrandomPhoto] = useState(null);

    useEffect(() => {
        if (!randomPhoto) {
            axios
                .get("https://pixabay.com/api/?key=26373649-9da5b85cbf2f8236e59e94ede&q=electric&image_type=photo&pretty=true")
                .then(({ data }) => setrandomPhoto(data.hits))
                //.then(response => console.log(response))
                .catch(() => { toast("Hata! - Axios Random Photo GET Yapamadı", { type: "error" }); })
        }
    }, []);



    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active" >
                        <img src={randomPhoto ? randomPhoto[Math.floor(Math.random() * 12)].largeImageURL : "/load.jpg"} className="d-block w-100" alt="..." style={divStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{randomPhoto ? randomPhoto[Math.floor(Math.random() * 12)].tags : "/load.jpg"}</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={randomPhoto ? randomPhoto[Math.floor(Math.random() * 15)].largeImageURL : "/load.jpg"} className="d-block w-100" alt="..." style={divStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{randomPhoto ? randomPhoto[Math.floor(Math.random() * 12)].tags : "/load.jpg"}</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={randomPhoto ? randomPhoto[Math.floor(Math.random() * 18)].largeImageURL : "/load.jpg"} className="d-block w-100" alt="..." style={divStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{randomPhoto ? randomPhoto[Math.floor(Math.random() * 12)].tags : "/load.jpg"}</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider