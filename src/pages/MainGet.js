import React, { useEffect, useState } from 'react';
import HeaderUser from '../layout/HeaderUser';


const MainGet = () => {

    const [dbProducts, setdbProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(dbGetData => dbGetData.json())
            .then(dbGetData => setdbProducts(dbGetData.result));
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
                            <th scope="row">{index}</th>
                            <td>{p._id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.tag}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div >
    )

}

export default MainGet