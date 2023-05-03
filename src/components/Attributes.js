import React, { useEffect, useContext } from "react";
import { Button } from "@material-tailwind/react";
import FormContext from "./FormContext";
import { data as Initdata } from './data';

const Attributes = () => {
  const { data, setData } = useContext(FormContext);

  const titlesAttributes = Object.keys(data.attributes);

  const handleExtraChange = (event) => {
    if (event === null || event === 0) return;
    console.log(data.attributes[event.target.alt].extras, Number(event.target.value));
    const itemExtra = Number(event.target.value);
    const itemState = data.attributes[event.target.alt];
    const itemTotalSum = itemState.base + itemExtra + itemState.enhancement;
    const itemModifierSum = Math.trunc(itemTotalSum / 10);

    setData({
      ...data,
      attributes: {
        ...data.attributes,
        [event.target.alt]: {
          ...data.attributes[event.target.alt],
          enhancement: itemState.enhancement,
          extras: itemExtra,
          total: itemTotalSum,
          modifier: itemModifierSum
        }
      }
    }
    );
  };

  const handleEnhancementChange = (event) => {
    if (event === null || event === 0) return;
    console.log(data.attributes[event.target.alt].enhancement, Number(event.target.value));
    const itemEnhancement = Number(event.target.value);
    const itemState = data.attributes[event.target.alt];
    const itemTotalSum = itemState.base + itemEnhancement + itemState.extras;
    const itemModifierSum = Math.trunc(itemTotalSum / 10);

    setData({
      ...data,
      attributes: {
        ...data.attributes,
        [event.target.alt]: {
          ...data.attributes[event.target.alt],
          enhancement: itemEnhancement,
          extras: itemState.extras,
          total: itemTotalSum,
          modifier: itemModifierSum
        }
      }
    }
    );
  };

  const updateBaseByRace = () => {
    let attributes = data.attributes;
    
    titlesAttributes.forEach(item => {
      let value = data.info.race.attributes[item];
      attributes[item] = {
          base: value,
          extras: 0,
          enhancement: 0,
          modifier: Math.trunc(value / 10),
          total: value
        }
      });

    setData({
      ...data,
      attributes: attributes
    });
  };
  
  useEffect(() => {
    if (JSON.stringify(data.info.race) !== JSON.stringify(Initdata.info.race)) {
      updateBaseByRace()
    };
  }, [data.info.race])

  const renderAttributes = () => titlesAttributes.map(item =>
  (<li key={item + '_name'} className="px-4">
    <div key={item + '_fullname'} className="inline-flex w-3/12 md:w-1/6">
      <span className="font-bold">{item.substring(0, 3).toUpperCase()}</span>
    </div>
    <div key={item + '_base'} className="hidden w-1/6 md:inline-flex text-center">
      <span className="hidden lg:block">{item}</span>
    </div>
    <div className="inline-flex w-1/12 text-center">{data.attributes[item].base}</div>
    <div className="inline-flex w-1/6 p-2">
      <input type="number" alt={item} onChange={handleExtraChange} value={data.attributes[item].extras} className="w-full text-center" />
    </div>
    <div className="inline-flex w-1/6 p-2">
      <input type="number" alt={item} onChange={handleEnhancementChange} value={data.attributes[item].enhancement} className="w-full text-center" />
    </div>
    <div className="inline-flex w-1/6 text-center">
      <Button variant="outlined" size="sm">
        {data.attributes[item].total}
      </Button>
    </div>
    <div className="inline-flex w-1/12 text-center px-2">{data.attributes[item].modifier}</div>
  </li>)
  );

  return (
    <div className="rounded-md bg-blue-100 py-4 overflow-hidden">
      <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">Attributes</h1>
      <ul>
        <li className="px-4">
          <div className="inline-flex w-3/12 md:w-2/6 lg:w-2/6 text-blue-500 text-xs"></div>
          <div className="inline-flex w-1/12 text-blue-500 text-xs text-center">Base</div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs text-center px-4">Extr.</div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs px-4">Enha.</div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs px-2">Total</div>
          <div className="inline-flex w-1/12 text-blue-500 text-xs">Mod.</div>
        </li>
        {renderAttributes()}
      </ul>
    </div>
  )
}

export default Attributes;