
import React, { useEffect, useState } from 'react';
import axios from "axios";

const CardGroup = () => {

    const [DBgetCountry, setDBgetCountry] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(cevap => setDBgetCountry(cevap.data))
    }, []);


    console.log(DBgetCountry[0]);

    
        DBgetCountry.map((country) => {
            console.log(country);
        })



        return (

            <div className="d-flex justify-content-around flex-wrap mt-3">
                {DBgetCountry.map((country) => {
                    return (
                        <div className="card h-200 col-2 shadow-lg p-3 mb-5 rounded bg-primary " key={country}>
                            <div className="   ">
                                <img src={country.flags.png} className="card-img-top" alt="{country.name.common}" />
                                <div className="card-body">
                                    <h5 className="card-title">{country.name.common}</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    );
                })}




            </div>

        )
    }

    export default CardGroup