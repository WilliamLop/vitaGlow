
import React from 'react'
import Image from "next/image";


const Button = ({ variant, disabled, title, startIcon, endIcon, size, color }) => {

    const baseStyle = 'py-2 rounded-lg text-center font-medium duration-300 ease-in-out shadow-md';
    const styles = {
        default: `${baseStyle} bg-grayBtn hover:bg-gray-600/50`,
        outline: `${baseStyle} border border-blue-600 text-blue-600 hover:bg-blue-200/40`,
        text: `${baseStyle} text-blue-600 px-0 hover:bg-blue-200/40 hover:px-5`,
        disableShadow: `${baseStyle} bg-blue-600 text-white`,
        disabled: `${baseStyle} bg-gray-800/20 text-gray-900 cursor-not-allowed opacity-60`,
    };

    const sizeStyles = {
        sm: 'w-[90px] text-sm text-center px-4',
        md: 'w-[125px] text-md px-8',
        lg: 'w-[150px] text-md mx-auto lg:mx-0 shadow-md',
    }

    const colorsStyles = {
        
        default: `${baseStyle} bg-[#E0E0E0] hover:bg-[#AEAEAE]`,
        primary: `${baseStyle} bg-[#02A2DD] text-white hover:bg-[#2962FF]`,
        secondary: `${baseStyle} bg-[#455A64] text-white hover:bg-[#1C313A]`,
        danger: `${baseStyle} bg-[#D32F2F] text-white hover:bg-[#9A0007] `
    }

    const buttonStyle = styles[variant] || styles.defaul;
    const sizeStyle = sizeStyles[size]
    const colorStyle = colorsStyles[color];

    return (
        <button className={`${buttonStyle} ${sizeStyle} ${colorStyle}`} 
        title={`${title}`}>
            {startIcon && <span className=""><Image src={startIcon}/></span>}
                {title}
            {endIcon && <span className=""><Image src={endIcon}/></span>}
        </button>
    )
}

export default Button