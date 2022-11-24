import React from 'react'
import join from '../../asserts/img/join.png'
import Content from '../Content/Content'
import Buttons from '../Buttons/Buttons'

export default function JoinSection() {
  return (
      <Content
          deriction = "flex-row-reverse"
      lineText="Join Harrrry! Short Time"
      heading="Do you Want To Join Course"
      paragraph="As a digital marketing agency.we strive to understand our client's  business goal first them all decisions made with those."
      pic={join}
      buttonOne=<Buttons
        color="primary"
        textColor="white"
        text="Join for free"
      />
    />
  );
}
