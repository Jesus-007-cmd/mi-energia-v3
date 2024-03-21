type Props = {
  children?: any;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

const buttonClass = `
  inline-flex justify-center items-center gap-x-3 text-center border-2 border-white py-2 px-4 
  border border-transparent text-white text-sm font-medium rounded-full focus:outline-none
  hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out
`;

export default function WhiteBorderButton (props:Props) {

  const { type = 'button', disabled = false } = props;

  return (

    <button className={buttonClass} onClick={props.onClick} type={type} disabled={disabled}>

      {props.children}

    </button>

  )
  
}


