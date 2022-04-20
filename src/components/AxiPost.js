import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';




const ariaLabel = { 'aria-label': 'description' };


const AxiPost = () => {

    // const [Display_Name, setDisplay_Name] = useState('');
    // const [Display_Price, setDisplay_Price] = useState('');
    // const [Display_Tag, setDisplay_Tag] = useState('');

    const [Display_Body, setDisplay_Body] = useState({ name: "", price: "", tag: "" });

    const handleOnChange = event => {
        setDisplay_Body({ ...Display_Body, [event.target.name]: event.target.value })
    };

    const dbAxiosPost = () => {
        console.log({ Display_Body })
        axios
            .post('http://localhost:5000/api/products', Display_Body);
    };

    useEffect(() => {


    }, [])

    return (
        <div className='d-flex justify-content-center'>
            <div className='card-body row'>
                <div className='card p-5 col border bg-light'>

                    <p></p>
                    <h4>AxiPost Gönder Modülü</h4>
                    <p></p>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Blog Görseli Yükleyiniz</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <p></p>
                    <Input name="name" placeholder="Name:" inputProps={ariaLabel} onChange={handleOnChange} />
                    <p></p>
                    <Input name="price" placeholder="Price:" inputProps={ariaLabel} onChange={handleOnChange} />
                    <p></p>
                    <Input name="tag" placeholder="Tag:" inputProps={ariaLabel} onChange={handleOnChange} />
                    <p></p>
                    <Button variant="contained" onClick={dbAxiosPost}>Gönder</Button>

                    {/* <p>Name:{Display_Body.name}</p>
                        <p>Price:{Display_Body.price}</p>
                        <p>Tag:{Display_Body.tag}</p> */}


                </div>
            </div>

        </div>
    )
}

export default AxiPost