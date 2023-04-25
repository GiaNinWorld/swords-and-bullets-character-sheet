import React from 'react'

function Magic() {
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 m-2 overflow-hidden h-auto">
            <h1 className="px-3 py-2 mx-3 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">Magic</h1>
            <ul className='columns-2 gap-0'>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Religion</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                <div className='inline-flex w-1/2'>Disciplines</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                <div className='inline-flex w-1/2'>Devotion</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                <div className='inline-flex w-1/2'>Masteries</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
            </ul>
            <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 m-2 overflow-hidden">
                <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-400 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">Mana</h1>
                <ul className='columns-2 xl:columns-5 gap-0'>
                    <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Base</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                    </li>
                    <li className='py-2 px-4'>
                    <div className='inline-flex w-3/4'>Multiply</div>
                    <div className='inline-flex w-1/4'><input className='w-full' /></div>
                    </li>
                    <li className='py-2 px-4'>
                    <div className='inline-flex w-3/4'>Maximum</div>
                    <div className='inline-flex w-1/4'><input className='w-full' /></div>
                    </li>
                    <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Used</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                    </li>
                    <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>BM</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Magic