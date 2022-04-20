import React from 'react';
import { useEffect, useState } from 'react';
import HeaderUser from '../layout/HeaderUser';
import axios from 'axios';
import FooterUser from '../layout/FooterUser';
import { toast } from 'react-toastify';
import { style } from '@mui/system';



const MainPut = () => {


  const [dbProducts, setDBrawdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(cevap => setDBrawdata(cevap.data.result))
      .catch (() => { toast("Hata!", { type: "error" }); })
  }, []);


  const postDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => { axios.get("http://localhost:5000/api/products") })
      .catch (() => { toast("Hata!", { type: "error" }); })
  }

  const postPut = (id, data) => {
    axios.put(`http://localhost:5000/api/products/${id}`, data)
      .then(() => { axios.get("http://localhost:5000/api/products"); toast("Post Düzenlendi", {type:"success"}) })
      .catch (() => { toast("Hata!", { type: "error" }); })
  }



  return (
    <div>
      <HeaderUser />
      <div className='container'>
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
              <tr key={index} className="">
                <th scope="row">{index}</th>

                <th><button className="btn btn-warning" type="button" id="button-addon2" onClick={() => { postPut(p._id, dbProducts[index]); console.log(dbProducts[index]) }}>Değiştir</button>
                </th>

                <td>{p._id}</td>

                <td><div className="input-group mb-3">
                  <input type="text" className="form-control" value={p.name} onChange={(e) => {
                    dbProducts[index].name = e.target.value
                    setDBrawdata([...dbProducts])
                  }} />
                </div></td>

                <td><div className="input-group mb-3">
                  <input type="text" className="form-control" value={p.price} onChange={(e) => {
                    dbProducts[index].price = e.target.value
                    setDBrawdata([...dbProducts])
                  }} />
                </div></td>

                <td><div className="input-group mb-3">
                  <input type="text" className="form-control" value={p.tag} onChange={(e) => {
                    dbProducts[index].tag = e.target.value
                    setDBrawdata([...dbProducts])
                  }} />

                </div></td>

              </tr>
            )}
          </tbody>

        </table>
      </div>
      <FooterUser/>
    </div>
  )
}

export default MainPut