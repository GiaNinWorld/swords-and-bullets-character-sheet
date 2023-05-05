import React, { useEffect, useState } from "react";
import { data as Initdata } from "./components/data";

import FormContext from "./components/FormContext";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Info from "./components/Info";
import Attributes from "./components/Attributes";
import Skills from "./components/Skills";
import Portrait from "./components/Portrait";
import Stats from "./components/Stats";
import Magic from "./components/Magic";
import Traits from "./components/Traits";
import Weapons from "./components/Weapons";
import Equipments from "./components/Equipments";

const App = () => {
  const rightColCss =
    "grid col-span-5 row-span-1 md:col-span-4 lg:col-span-3 lg:row-span-2";
  const rowCss =
    "grid grid-flow-row lg:grid-col-6 lg:grid-flow-col gap-4 col-span-6";
  const downSectionCss =
    "grid grid-flow-row lg:grid-col-5 lg:grid-flow-col gap-4 py-2 px-2 w-full";
  const upSectionCss = downSectionCss + " lg:grid-row-3";

  const [data, setData] = useState(Initdata);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(Initdata)) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="font-roboto min-h-screen grid bg-gray-900">
      <FormContext.Provider value={{ data, setData }}>
        <Header />
        <section>
          <div className={upSectionCss}>
            <div className={rowCss}>
              <div className="col-span-1 max-w-sm">
                <Logo />
              </div>
              <div className="col-span-5">
                <Info />
              </div>
            </div>

            <div className={rowCss}>
              <Attributes />
              <Stats />
            </div>

            <div className={rightColCss}>
              <Portrait />
            </div>
          </div>

          <div className={downSectionCss}>
            <Skills />
          </div>

          <div className={downSectionCss}>
            <div className="grid grid-flow-row grid-col-4 gap-4 w-full">
              <Weapons />
              <Equipments />
            </div>
            <div className="grid grid-flow-row grid-col-1 gap-4 w-full">
              <Traits />
              <Magic />
            </div>
          </div>
        </section>
        <Header />
      </FormContext.Provider>
    </div>
  );
};

export default App;
