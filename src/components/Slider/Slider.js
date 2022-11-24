import React from 'react'
import Card from '../Card/Card';
import banner from '../../asserts/img/course.png'
import boydp from '../../asserts/img/dp_boy.png'
import girldp from '../../asserts/img/dp_girl.png'

export default function Slider() {
  return (
    <>
      <div className="row">
        <div className="d-flex">
          <div className="col-8">
            <h1 className="display-3 fw-bold">Get A Choice Of Your Course</h1>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <i
              class="fa-solid fa-angle-left fs-2 me-2 p-3 rounded-circle hover border border-primary"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            ></i>
            <i
              class="fa-solid fa-angle-right fs-2 p-3 rounded-circle hover border border-primary"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            ></i>
          </div>
        </div>

        {/* slider */}
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleControls"
              className="carousel solid"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <Card
                      banner={banner}
                      courseName="Graphic Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={boydp}
                      cost="$746.98"
                    />
                    <Card
                      banner={banner}
                      courseName="Ui/Ux Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={girldp}
                      cost="$546.99"
                    />
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <Card
                      banner={banner}
                      courseName="Graphic Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={boydp}
                      cost="$746.98"
                    />
                    <Card
                      banner={banner}
                      courseName="Ui/Ux Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={girldp}
                      cost="$546.99"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <Card
                      banner={banner}
                      courseName="Graphic Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={boydp}
                      cost="$746.98"
                    />
                    <Card
                      banner={banner}
                      courseName="Ui/Ux Design"
                      teacherName="-Rhayahn Suman"
                      dpPic={girldp}
                      cost="$546.99"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
