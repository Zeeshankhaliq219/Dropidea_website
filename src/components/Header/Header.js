import React from 'react'
import Buttons from '../Buttons/Buttons'
import logo from '../../asserts/img/logo.png'
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="javascript:void(0)">
            <img className='img-fluid logo ' src={logo} alt="" />
            DROPIDEA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold text-black" href="javascript:void(0)">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black fw-bold" href="javascript:void(0)">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black fw-bold" href="javascript:void(0)">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black fw-bold" href="javascript:void(0)">
                  Contact
                </a>
              </li>
              <li className="nav-item px-2 rounded-2 ">
                <Buttons
                  color="transparent"
                  textColor="primary"
                  text="Free Trail Now"
                  bold="bold"
                  hover = "hover"
                  borderColor = "border-primary"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
