import React from "react";
import main from "../../asserts/img/main.png";
import Content from "../Content/Content";
import Buttons from "../Buttons/Buttons";

export default function Mainbar() {
  return (
    <>
      <Content
        lineText="Make Your Great Future"
        heading="Online Course Expart Teaching"
        paragraph={`As a digital marketing agency.we strive to understand our client's  business goal first them all decisions made with those.`}
        pic={main}
        buttonOne=<Buttons
          color="primary"
          textColor="white"
          text="Join for free"
        />
        buttonTwo=<Buttons
          color="transparent"
          textColor="black"
          text={<u>"Watch videos"</u>}
          bold="bold"
          margin="ms-3"
          hover = "hover"
        />
      />
    </>
  );
}
