import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderUser from '../layout/HeaderUser';
import FooterUser from '../layout/FooterUser';
import { toast } from 'react-toastify';


const MainDelete = () => {

  const [dbProducts, setDBrawdata] = useState([]);

//componenetDidUpdate - useEffect - dependency yokken
//componenetDidMount -useEffect - dependency array varken

  useEffect(() => { 
    axios
      .get("http://localhost:5000/api/products")
      .then(cevap => setDBrawdata(cevap.data.result))
      .catch(() => { toast("Hata!", { type: "error" }); })
  });


  const postDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      //     .then(() => {
      //       axios.get("http://localhost:5000/api/products")
      //         .then(cevap => setDBrawdata(cevap.data.result))
      //         .then(toast("Post Silindi", { type: "success" }))
      // })
      .catch(() => { toast("Hata!", { type: "error" }); })

  }




  return (

    <>
      <HeaderUser />
      <div className='container '>

        <table className="table table-striped table-responsive align-middle shadow-lg" >

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
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
                <th scope="row"><button type="button" className="btn btn-danger" onClick={() => postDelete(p._id)}>Delete</button></th>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.tag}</td>
              </tr>
            )}
          </tbody>

        </table>

      </div>
      <FooterUser />
    </>
  )
}

export default MainDelete