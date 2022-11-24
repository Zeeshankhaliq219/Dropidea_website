import React from 'react'
import Content from '../Content/Content'
import fedback from '../../asserts/img/fedback.png'
import Buttons from '../Buttons/Buttons';

export default function Feedback() {
  return (
    <>
      <Content
        lineText="What Say Our Students"
        heading="Our Successful Students Feedback"
        paragraph="As a digital marketing agency.we strive to understand our client's  business goal first then all decisions made with those. As a digital marketing agency.we strive to understand our client's  business goal first then all decisions"
        pic={fedback}
        buttonOne=<Buttons
          color="primary"
          textColor="white"
          text="Join for free"
        />
      />
    </>
  );
}
