import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button
            className='relative cursor-pointer transform hover:scale-105 duration-500 py-2 px-3 rounded-lg font-medium text-sm
                       bg-gradient-to-b from-[#190d2e] to-[#4a208a]
                       shadow-[0px_0px_12px_0px_#8c45ff]'
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;
