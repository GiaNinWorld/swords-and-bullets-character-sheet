/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import data from '../assets/character_sheet.json';

function Skills() {
    const titles = Object.keys(data);
    const titlesSkills = Object.keys(data[titles[2]]);

    const renderSkillList = (skillList, title) => skillList.map(item =>
    (<li key={item} className="p-8 pt-0 pb-0">
        <div key={item} className='inline-flex w-3/12 overflow-ellipsis font-bold'>{item}</div>
        <div key={item + 'attribute'} className='w-1/12 text-right  hidden xl:inline-flex'>{data.Skills[title][item].Attribute.substring(0, 3).toUpperCase()}</div>
        <div className='inline-flex w-5/12 justify-around'>
            <input type='radio' name={item + 'level'} />
            <input type='radio' name={item + 'level'} />
            <input type='radio' name={item + 'level'} />
            <input type='radio' name={item + 'level'} />
            <input type='radio' name={item + 'level'} />
        </div>
        <div className='inline-flex w-1/12'><input className='w-full' /></div>
        <div className='inline-flex w-1/12'>
            <a href="#" className='mx-4 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-blue-400 rounded-md dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary'>
                Roll
            </a>
        </div>
    </li>)
    );

    const renderSkills = () => titlesSkills.map(item =>
    (<li key={item}>
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-400 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">{item}</h1>
            <ul className="p-8 pt-0 pb-0 text-blue-600">
                <li className='inline-flex w-3/12'>Skill</li>
                <li className=' w-1/12 text-center hidden xl:inline-flex'>Attr.</li>
                <li className='inline-flex w-5/12 justify-around'>
                    <span>½</span>
                    <span>0</span>
                    <span>+10</span>
                    <span>+20</span>
                    <span>+30</span>
                </li>
                <li className='inline-flex w-1/12 text-center'>Final</li>
                <li className='inline-flex w-2/12 text-center'></li>
            </ul>
            {renderSkillList(Object.keys(data.Skills[item]), item)}
        </div>
    </li>)
    );
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 mb-4 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">{titles[2]}</h1>
            <ul className='columns-2 xl:columns-3 gap-0'>
                {renderSkills()}
            </ul>
        </div>
    )
}

export default Skills