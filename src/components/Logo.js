import React from 'react';
import logo from '../assets/images/sb_logo_horizontal.png';

function Logo() {
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 m-2 overflow-hidden text-center w-1/4 align-middle">
            <img src={logo} className="w-full pr-12" />
        </div>
    )
}

export default Logo