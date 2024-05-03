// Modules
import React from "react";

type Props = {
  buttonClass:string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

export default function CustomButton (props:Props) {

  const { type = 'button', disabled = false, buttonClass } = props;

  return (

    <button className={buttonClass} onClick={props.onClick} type={type} disabled={disabled}>

      {props.children}

    </button>

  )
  
}