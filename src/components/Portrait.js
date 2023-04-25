import React from 'react'
import PAMap from './PAMap'

function Portrait() {
    return (
        <div className="rounded-md bg-blue-100 dark:bg-gray-800 py-4 m-2 overflow-hidden text-center">
            <h1 className="px-3 py-2 mx-3 font-bold text-blue-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-blue-200 rounded-md">Portrait</h1>
            <img src="https://cdnb.artstation.com/p/assets/images/images/008/342/431/large/jordy-knoop-rpg-003-hunter-final1.jpg?1512125403"
                className="object-contain w-full mx-auto my-2 bg-slate-700"
                alt="portait" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">New Image</button>
            {/* <PAMap /> */}
        </div>
    )
}

export default Portrait