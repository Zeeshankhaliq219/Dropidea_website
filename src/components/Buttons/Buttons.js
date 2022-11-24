import React from 'react'

export default function Buttons(props) {
    const {color , textColor , text , bold , hover , margin, borderColor} = props;
    return (
      <>
        <button
          className={`btn btn-${props.color} fs-6 fw-${bold} text-${
            props.textColor
          } px-3 py-2 ${props.hover} border-none ${borderColor ? borderColor : "border-none"} ${
            margin ? margin : "ms-0"
          }`}
        >
          {" "}
          {props.text}{" "}
        </button>
      </>
    );
}
