import React from "react";
import "./Button.css";
import {Link} from "react-router-dom";
// btn-s has an outline
const STYLES = ["btn--p", "btn--s"];
const SIZES = ["btn--med", "btn--lar"];

function Button(obj) {
  const {input, inputIcon, type, onClick, buttonStyle, buttonSize} = obj;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  console.log(`btn ${checkButtonStyle} ${checkButtonSize}`);
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {input} {inputIcon}
      </button>
    </Link>
  );
}

export default Button;
