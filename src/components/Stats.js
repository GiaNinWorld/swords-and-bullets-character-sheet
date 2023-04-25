import React from 'react'

function Stats() {
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 m-2 overflow-hidden">
            <h1 className="px-3 py-2 mx-3 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">Stats</h1>
            <ul className='columns-2 gap-0'>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Passive Attention</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>AN</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Life</div>
                    <div className='inline-flex w-1/2'><input className='w-1/2' />/<input className='w-1/2' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Crit. Damage</div>
                    <div className='inline-flex w-1/2'><input className='w-1/2' />/<input className='w-1/2' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Iniciative</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Move</div>
                    <div className='inline-flex w-1/2'><input className='w-full' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Fervor</div>
                    <div className='inline-flex w-1/2'><input className='w-1/2' />/<input className='w-1/2' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Blood</div>
                    <div className='inline-flex w-1/2'><input className='w-1/2' />/<input className='w-1/2' /></div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Breath</div>
                    <div className='inline-flex w-1/2'><input className='w-1/2' />/<input className='w-1/2' /></div>
                </li>
            </ul>
            <ul>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/4'>Condition</div>
                    <div className='inline-flex w-3/4'><input className='w-full' /></div>
                </li>
            </ul>
        </div>
    )
}

export default Stats