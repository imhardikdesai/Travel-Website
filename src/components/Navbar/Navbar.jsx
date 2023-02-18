import React from 'react'
import Airplane from './../../assets/img/airplane.svg'
import Bed from './../../assets/img/bed.svg'
import logo from "./../../assets/img/Logo.svg"

const Navbar = () => {
    return (
        <>
            {/* <nav class="navbar navbar-expand-lg bg-transparent text-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className='nav-logo' src={logo} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav>
                <div className="nav-option">
                    <div className="nav-option--child">
                        <img src={Airplane} alt="airplane" />
                        <span>Find Flight</span>
                    </div>
                    <div className="nav-option--child">
                        <img src={Bed} alt="airplane" />
                        <span>Find Stays</span>
                    </div>
                </div>
                <div className="nav-logo">
                    <img className='nav-logo' src={logo} alt="logo" />
                </div>
                <div className="nav-btn">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
