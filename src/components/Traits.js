import React from 'react'

function Traits() {
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">Character Traits</h1>
            <div className='inline-flex w-full p-4'>
            <div className='inline-flex w-3/4 text-right'>Experience Points</div>
            <div className='inline-flex w-1/4'><input className='w-full' /></div>
            </div>
            <ul className='columns-2 gap-0'>
                <li className='py-2 px-4'>
                    <div>Enhancement</div>
                    <textarea className='w-full h-full'></textarea>
                </li>
                <li className='py-2 px-4'>
                <div>Flaws</div>
                    <textarea className='w-full h-full'></textarea>
                </li>
            </ul>
        </div>
    )
}

export default Traits