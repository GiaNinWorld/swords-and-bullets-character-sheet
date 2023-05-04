/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Input } from "@material-tailwind/react";
import data from '../assets/mocks/character_sheet.json';

function Skills() {
    const titles = Object.keys(data);
    const titlesSkills = Object.keys(data[titles[2]]);

    const inputRadioCss = "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-blue-800 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,1)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[1] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"

    const handleSkill = (event) => {
        console.log(event.target.value);
    };

    const renderSkillList = (skillList, title) => skillList.map(item =>
    (<li key={item} className="py-1 mb-2 mx-8 border-b-2 border-indigo-100">
        <div key={item} className="inline-flex w-4/12 overflow-ellipsis font-bold">{item}</div>
        <div key={item + "attribute"} className="w-1/12 text-right  hidden xl:inline-flex">{data.Skills[title][item].Attribute.substring(0, 3).toUpperCase()}</div>
        <div className="inline-flex w-5/12 justify-around">
            <input type="radio" name={item + "_level"} value="0" onChange={handleSkill} className={inputRadioCss} />
            <input type="radio" name={item + "_level"} value="1" onChange={handleSkill} className={inputRadioCss} />
            <input type="radio" name={item + "_level"} value="2" onChange={handleSkill} className={inputRadioCss} />
            <input type="radio" name={item + "_level"} value="3" onChange={handleSkill} className={inputRadioCss} />
            <input type="radio" name={item + "_level"} value="4" onChange={handleSkill} className={inputRadioCss} />
        </div>
        <div className="inline-flex">
            <a href="#" className="my-1 px-2 py-1 text-lg font-bold text-blue-800 uppercase transition-colors duration-300 transform bg-white rounded-lg hover:bg-primary">
                00
            </a>
        </div>
    </li>)
    );

    const renderSkills = () => titlesSkills.map(item =>
    (<li key={item}>
        <div className="rounded-md bg-blue-100 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-400 tracking-wider bg-blue-200 rounded-md">{item}</h1>
            <ul className="mx-8 p-0 pb-2 mb-2 text-blue-600 border-b-2 border-indigo-100">
                <li className='hidden lg:inline-flex w-2/6'>Skill</li>
                <li className=' w-1/12 text-center hidden lg:inline-flex'>Attr.</li>
                <li className='hidden lg:inline-flex w-5/12 justify-around'>
                    <span>½</span>
                    <span>0</span>
                    <span>+10</span>
                    <span>+20</span>
                    <span>+30</span>
                </li>
                <li className='hidden lg:inline-flex w-1/12 text-center'>&nbsp;Final</li>
            </ul>
            <ul>
            {renderSkillList(Object.keys(data.Skills[item]), item)}
            </ul>
        </div>
    </li>)
    );
    return (
        <div className="rounded-md bg-blue-100 py-4 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 mb-4 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">{titles[2]}</h1>
            <ul className='columns-1 md:columns-2 xl:columns-3 gap-0'>
                {renderSkills()}
            </ul>
        </div>
    )
}

export default Skills