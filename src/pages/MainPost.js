import React from 'react'
import AxiPost from '../components/AxiPost'
import FooterUser from '../layout/FooterUser'
import HeaderUser from '../layout/HeaderUser'

const MainPost = () => {
    return (
        <div>
            <HeaderUser />
            <div className='container'>
                <AxiPost />
            </div>
            <FooterUser />
        </div>
    )
}

export default MainPost