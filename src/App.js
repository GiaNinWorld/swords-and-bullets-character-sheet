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
import Weapons from './components/Weapons';
import Equipments from './components/Equipments';

const App = () => {
  const rightColCss =    "grid col-span-6 row-span-1 lg:col-span-2 lg:row-span-3";
  const rowCss =         "grid grid-flow-row lg:grid-flow-col gap-4";
  const downSectionCss = "grid grid-flow-row lg:grid-col-6 lg:grid-flow-col gap-4 p-4 w-full";
  const upSectionCss = downSectionCss + " lg:grid-row-3";

  return (
    <div className="App tracking-wide font-roboto min-h-screen grid bg-gray-900">
      <Header />
      <section>
        <div className={upSectionCss}>
          <div className="col-span-6">
            <div className={rowCss}>
              <div className="col-span-1 xl:w-1/2"><Logo /></div>
              <div className="col-span-5"><Info /></div>
            </div>
          </div>

          <div className="col-span-6">
            <div className={rowCss}>
              <Attributes />
              <Stats />
            </div>
          </div>

          <div className="col-span-6">
            <div className={rowCss}>
              <Traits />
              <Magic />
            </div>
          </div>

          <div className={rightColCss}><Portrait /></div>
        </div>

        <div className={downSectionCss}>
          <Skills />
          
          <div className="grid grid-flow-row lg:grid-col-6 gap-4 w-full">
            <Weapons />
            <Equipments />
          </div>
        </div>

      </section>

      <Header />
    </div >
  );
}

export default App;
