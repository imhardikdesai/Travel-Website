import React from 'react'
import Navbar from './../Navbar/Navbar'
import './../../assets/css/main.min.css'
import InputBox from '../Input/InputBox'

const HeaderPage = () => {
    return (
        <>
            <div className="header">
                <Navbar />
                <div className="header-content text-center text-light">
                    <div className="header-content--title font-tl">
                        Helping Others
                        <div>
                            Live & Travel
                        </div>
                    </div>
                    <div className='header-content--detail'>
                        Special offers to suit your plan
                    </div>
                </div>
            </div>
                <InputBox />
        </>
    )
}

export default HeaderPage
