import React from 'react'
import data from '../assets/character_sheet.json';

function Info() {
    const titles = Object.keys(data);
    const titlesInfo = Object.keys(data[titles[0]]);

    const renderTitles = () => titlesInfo.map((item, index) =>
    (<li key={item} className="p-4 pt-2 pb-2">
        <div className='inline-flex w-1/4'>{item}</div>
        {
            (index > 2)
                ?<div className='inline-flex w-3/4'><select className='w-full' /></div>
                :<div className='inline-flex w-3/4'><input className='w-full' /></div>
        }
    </li>)
    );

    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4">
            <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">{titles[0]}</h1>
            <ul className='columns-2 gap-0'>{renderTitles()}</ul>
        </div>
    )
}

export default Info;