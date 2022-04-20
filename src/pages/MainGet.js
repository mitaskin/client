import React, { useEffect, useState } from 'react';
import FooterUser from '../layout/FooterUser';
import HeaderUser from '../layout/HeaderUser';
import { ToastContainer, toast } from 'react-toastify';



const MainGet = () => {

    const notify = () => toast.success('Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const [dbProducts, setdbProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(dbGetData => dbGetData.json())
            .then(dbGetData => setdbProducts(dbGetData.result))
            .catch (() => { toast("Hata!", { type: "error" }); })

    }, []);

    console.log(dbProducts)

    return (
        <div>

            <HeaderUser />
            <table className="table table-striped table-responsive">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">isim</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">Etiket</th>
                    </tr>
                </thead>

                <tbody>
                    {dbProducts.map((p, index) =>
                        <tr key={index}>
                            <th onClick={notify}><button className="btn btn-dark" type="button" >notify</button>
                            </th>
                            <th scope="row">{index}</th>
                            <td>{p._id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.tag}</td>
                        </tr>
                    )}
                </tbody>

            </table>
            <FooterUser />
        </div >
    )

}

export default MainGet