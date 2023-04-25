/* eslint-disable jsx-a11y/alt-text */
import Header from './components/Header';
import Logo from './components/Logo';
import Info from './components/Info';
import Attributes from './components/Attributes';
import Skills from './components/Skills';
import Portrait from './components/Portrait';
import Stats from './components/Stats';
import Magic from './components/Magic';
import Traits from './components/Traits';

// const RACES = [
//   { id: 0, name: 'Donta' }
// ];

const App = () => {
  return (
    <div className="App tracking-wide font-roboto min-h-screen grid dark bg-gray-900">
      <Header />

      <section className='dark:bg-gray-900 lg:my-4'>

        <div className="flex flex-wrap w-full">
          <div className="xl:inline-flex">
            <div className="w-full xl:w-2/3">
              <div className="flex">
                <Logo />
                <Info />
              </div>
              <div className="columns-2 gap-0 space-y-4 p-0 my-4">
                <Attributes />
                <Traits />
                <Stats />
                <Magic />
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <Portrait />
            </div>
          </div>
          <div className="xl:inline-flex w-full">
            <div className="w-full xl:w-2/3">
              <Skills />
            </div>
            <div className="w-full xl:w-1/3">
              <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
                <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">Weapons</h1>
              </div>

              <div className="rounded-md bg-gray-100 dark:bg-gray-800 pt-4 m-2 overflow-hidden">
                <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 dark:bg-gray-700 dark:text-gray-200 tracking-wider bg-gray-200 rounded-md">Equipments</h1>
              </div>
            </div>
          </div>
        </div>



      </section>

      <Header />
    </div >
  );
}

export default App;
