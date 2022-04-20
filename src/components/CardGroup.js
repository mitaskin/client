
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import SingleCard from './SingleCard';



const CardGroup = () => {

    const [DBrawdata, setDBrawdata] = useState([]);
    const [randomPhoto, setrandomPhoto] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then(cevap => setDBrawdata(cevap.data.result))
            .catch(() => { toast("Hata! - Axios GET Yapamadı", { type: "error" }); })
    }, []);

    useEffect(() => {
        axios
            .get("https://pixabay.com/api/?key=26373649-9da5b85cbf2f8236e59e94ede&q=robot&image_type=photo&pretty=true")
            .then(cevap1 => setrandomPhoto(cevap1.data.hits))
            .catch(() => { toast("Hata! - Axios Random Photo GET Yapamadı", { type: "error" });})
    }, []);

 


     // console.log(randomPhoto);
    //   console.log(indexToPhoto);
    //   console.log(DBrawdata[2]);



    return (
        <>
            <div className="row mt-3">
                {DBrawdata.map((p, index) => (
                    <SingleCard  p={p} index={index} randomPhoto={randomPhoto[index].previewURL} key={index}/>
                ))}
            </div>
        </>
    )
}

export default CardGroup