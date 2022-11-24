import React from 'react'

export default function Card(props) {
    const { banner, courseName, teacherName, cost,dpPic} = props;
  return (
    <>
      <div className="col-12  col-md-6 d-flex flex-column justify-content-center pb-3">
        <img className="img-fluide rounded" src={props.banner} alt="" />
        <div className="row">
          <div className="col-8 ps-4">
            <h2 className="fw-bold">{props.courseName}</h2>
            <h6>
              <span className='text-info'>Teacher</span> {props.teacherName}
            </h6>
            <h3>{props.cost}</h3>
          </div>
          <div className="col-4">
            <img
              className="img-fluide  User-dp d-none d-lg-block"
              height={130}
              src={props.dpPic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
