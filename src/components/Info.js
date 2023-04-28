import React from 'react'
import data from '../assets/mocks/character_sheet.json';
import { CONSTANTS } from '../assets/mocks/const.js';

function Info() {
    const titles = Object.keys(data);
    const titlesInfo = Object.keys(data[titles[0]]);

    const renderOptions = (item) => {
        const iterator = (item + 's').toString().toUpperCase();
        const response = CONSTANTS[iterator].map(option => <option key={option}>{option}</option>);
        return response;
    }

    const renderTitles = () => titlesInfo.map((item, index) =>
    (<li key={item} className="p-4 pt-2 pb-2">
        <div className='inline-flex w-1/4'>{item}</div>
        {
            (index > 1)
                ? <div className='inline-flex w-3/4'><select className='w-full'>
                        <option></option>
                        { renderOptions(item) }
                    </select></div>
                : <div className='inline-flex w-3/4'><input className='w-full' /></div>
        }
    </li>)
    );

    return (
        <div className="rounded-md bg-blue-100 py-4">
            <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">{titles[0]}</h1>
            <ul className='columns-1 md:columns-2 gap-0'>{renderTitles()}</ul>
        </div>
    )
}

export default Info;