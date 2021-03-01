import React from 'react';
import './Button.css';

function Button({handleClick, children, disabled}) {
  return(
    <button 
      onClick={handleClick} 
      className="Button"
      disabled={ disabled }
    >{children}</button>
  );
}

export default Button;
