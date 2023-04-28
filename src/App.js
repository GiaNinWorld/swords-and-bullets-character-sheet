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

const App = () => {
  return (
    <div className="App tracking-wide font-roboto min-h-screen grid bg-gray-900">
      <Header />

      <section>

        <div className="grid grid-flow-row lg:grid-col-6 lg:grid-row-3 lg:grid-flow-col gap-4 p-4 w-full">
          <div className="col-span-6">
            <div className="grid grid-flow-row lg:grid-flow-col gap-4">
              <div className="col-span-1 xl:w-1/2"><Logo /></div>
              <div className="col-span-5"><Info /></div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="grid grid-flow-row lg:grid-flow-col gap-4">
              <Attributes />
              <Stats />
            </div>
          </div>

          <div className="col-span-6">
            <div className="grid grid-flow-row lg:grid-flow-col gap-4">
              <Traits />
              <Magic />
            </div>
          </div>

          <div className="grid col-span-6 row-span-1 lg:col-span-2 lg:row-span-3"><Portrait /></div>
        </div>

        <div className="grid grid-flow-row lg:grid-col-6 lg:grid-flow-col gap-4 p-4 w-full">

            <Skills />
          
          <div className="grid grid-flow-row lg:grid-col-6 gap-4 w-full">
            <div className="rounded-md bg-blue-100 py-4 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-4 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">Weapons</h1>
            </div>

            <div className="rounded-md bg-blue-100 py-4 overflow-hidden">
              <h1 className="px-3 py-2 mx-3 mb-4 font-bold text-blue-800  tracking-wider bg-blue-200 rounded-md">Equipments</h1>
            </div>

          </div>
        </div>

      </section>

      <Header />
    </div >
  );
}

export default App;
