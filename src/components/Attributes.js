/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import data from '../assets/mocks/character_sheet.json';

const Attributes = () => {
  const titles = Object.keys(data);
  const titlesAttributes = Object.keys(data[titles[1]]);

  const renderAttributes = () => titlesAttributes.map(item =>
  (<li key={item} className="px-4">
    <div key={item} className='inline-flex w-1/6 xl:w-3/12'>
      <span className='font-bold'>{item.substring(0, 3).toUpperCase()}</span>
      &nbsp;&nbsp;
      <span className='hidden xl:block'>{item}</span>
    </div>
    <div className='inline-flex w-1/6'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/6'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/6'><input className='w-full m-2' /></div>
    <div className='inline-flex w-1/6 xl:w-1/12'><input className='w-full m-2' /></div>
    <a href="#" className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-blue-400 rounded-md dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary'>
      Roll
    </a>
  </li>)
  );

  return (
    <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 overflow-hidden">
      <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">{titles[1]}</h1>
      <ul>
        <li className="mx-4 text-blue-600">
          <div className='inline-flex w-3/12'>Attribute</div>
          <div className='inline-flex w-1/6'>Base</div>
          <div className='inline-flex w-1/6'>Enh.</div>
          <div className='inline-flex w-1/6'>Total</div>
          <div className='inline-flex w-1/12'>Mod.</div>
        </li>
        {renderAttributes()}
      </ul>
    </div>
  )
}

export default Attributes;