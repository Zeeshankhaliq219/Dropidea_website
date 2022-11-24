import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Buttons from "../Buttons/Buttons";

export default function Content(props) {
    const { lineText, heading, paragraph, pic, buttonOne, buttonTwo, deriction } = props;
  return (
    <>
      <div className="container py-4">
        <div className={`row d-flex ${deriction}`}>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
            <span
              id="line"
              className="text-primary fs-4 d-flex align-items-center"
            >
              {lineText}
            </span>
            <h1 className="display-3 fw-bold">{heading}</h1>
            <p className="fs-6">
              {paragraph}
            </p>

                      <div className="d-flex">
                          {buttonOne}
                          {buttonTwo}
              
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
