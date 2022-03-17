import React from 'react'
import AxiPost from '../components/AxiPost'
import HeaderUser from '../layout/HeaderUser'

const MainPost = () => {
    return (
        <div>
            <HeaderUser />
            <div className='container'>
                <AxiPost />
            </div>

        </div>
    )
}

export default MainPost