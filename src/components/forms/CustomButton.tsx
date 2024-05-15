// Modules
import React from "react";

export type CustomButtonProps = {
  buttonClass:string;
  children?: React.ReactNode;
  onClick?: () => void;
  onEnter?: () => void;
  onLeave?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

export default function CustomButton (props:CustomButtonProps) {

  const { 
    type = 'button', 
    disabled = false, 
    buttonClass,
    onEnter: onHover = () => {},
    onLeave: onExit = () => {},
    onClick = () => {},
  } = props;

  return (

    <button 
      className={buttonClass} 
      onClick={onClick} 
      onMouseEnter={onHover}
      onMouseLeave={onExit}
      type={type} 
      disabled={disabled}
    > {props.children} </button>

  )
  
}