import React from 'react';
import AddPostModal from '../components/AddPostModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HeaderUser = () => {



  return (

    <div>
      <AddPostModal />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
        
      <div style={{background:'black', color:'white', fontSize:'30px', padding:10}}>R o c k e t B l o g</div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/about">mi.taskin</a>

          <div className="collapse navbar-collapse justify-content-md-center ">


            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Ana Sayfa</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/mainget">Tüm Yazılar</a></li>
                  <li><hr className="dropdown-divider" /></li>

                  <li><a className="dropdown-item" href="/mainpost">Yazı Oluştur</a></li>
                  <li><a className="dropdown-item" href="/mainput">Yazı Düzenle</a></li>
                  <li><a className="dropdown-item" href="/maindelete">Yazı Sil</a></li>

                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#" data-toggle="modal" data-target="#yeniyazimodal">Yeni Yazı</a>
              </li>

            </ul>
          </div>
        </div>
      </nav></div>
  )
}

export default HeaderUser