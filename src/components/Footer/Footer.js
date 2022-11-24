import React from 'react'
import logo from '../../asserts/img/logo.png'

export default function Footer() {
  return (
    <>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-bottom">
        <div className="col mb-3">
          <a className="navbar-brand fs-3" href="javascript:void(0)">
            <img className="img-fluid logo " src={logo} alt="" />
            DROPIDEA
          </a>
          <p className="mt-3 ps-2">
            This is the team that specializes in making sure in the find it a
            your interior looks cool
          </p>
          <div className="">
            <i class="fa-brands fa-facebook p-2 fs-2 icon"></i>
            <i class="fa-brands fa-twitter p-2 fs-2 icon"></i>
            <i class="fa-brands fa-google p-2 fs-2 icon"></i>
            <i class="fa-brands fa-linkedin p-2 fs-2 icon"></i>
          </div>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h3 className="fw-bold">Services</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Online Courses
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Web Design
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Graphic Design
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Web Devolement
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Ui/Ux Design
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h3 className="fw-bold">Support</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Account
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Legal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Contact
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Tram & Condition
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                privacy policiy
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h3 className="fw-bold">Links</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="javascript:void(0)" className="nav-link ps-0 text-black">
                professional Trainer
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="javascript:void(0)" className="nav-link ps-0 text-black">
                Live Booking
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0  text-black "
              >
                Our Team
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="javascript:void(0)"
                className="nav-link ps-0 text-black "
              >
                Working agent
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <h6 className="text-center pb-2">
        Created by <b>Zeeshan Khaliq</b>. All Rights Reserved
      </h6>
    </>
  );
}
