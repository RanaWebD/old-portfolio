import React from 'react';
import './buttons.css';

const Button1 = (props) => {
    const {color, backgroundColor} = props;
  return (
      <div class="Button-one" style={{color: color, backgroundColor: backgroundColor}}>
        <span>{props.text}</span>
      </div>
  );
}

export default Button1; 
