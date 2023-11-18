import React from "react";

const Button = props => {
    return(
        <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-full" 
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;