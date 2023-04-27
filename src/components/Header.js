/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Header() {
  return (
    <div className="bg-blue-900 dark:bg-blue-900 dark:border-blue-700 lg:w-full lg:top-0 lg:z-50 lg:left-0">
      <div className="container p-4 mx-auto">
        <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:space-x-4">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="flex items-center">
              <h1 className='text-white font-bold'>Character Sheet</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header