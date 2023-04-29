/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
// import data from "../assets/mocks/character_sheet.json";

const Attributes = () => {
  const initValues = {
    "base": 25,
    "extras": 0,
    "enhancement": 0,
    "total": 25,
    "modifier": 2
  };

  const attributes = {
    "Strength": initValues,
    "Dexterity": initValues,
    "Agility": initValues,
    "Resistence": initValues,
    "Intelligence": initValues,
    "Charisma": initValues,
    "Will": initValues,
    "Perception": initValues
  };

  const titlesAttributes = Object.keys(attributes);

  const [formState, setFormState] = useState(attributes);

  const handleExtraChange = (event) => {
    if (event === null || event === 0) return;
    console.log(formState[event.target.alt].extras, Number(event.target.value));
    const itemExtra = Number(event.target.value);
    const itemState = formState[event.target.alt];
    const itemTotalSum = itemState.base + itemExtra + itemState.enhancement;
    const itemModifierSum = Math.trunc(itemTotalSum / 10);

    setFormState({
      ...formState,
      [event.target.alt]: {
        ...formState[event.target.alt],
        enhancement: itemState.enhancement,
        extras: itemExtra,
        total: itemTotalSum,
        modifier: itemModifierSum
      }
    });
  };

  const handleEnhancementChange = (event) => {
    if (event === null || event === 0) return;
    console.log(formState[event.target.alt].enhancement, Number(event.target.value));
    const itemEnhancement = Number(event.target.value);
    const itemState = formState[event.target.alt];
    const itemTotalSum = itemState.base + itemEnhancement + itemState.extras;
    const itemModifierSum = Math.trunc(itemTotalSum / 10);

    setFormState({
      ...formState,
      [event.target.alt]: {
        ...formState[event.target.alt],
        enhancement: itemEnhancement,
        extras: itemState.extras,
        total: itemTotalSum,
        modifier: itemModifierSum
      }
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState])

  const renderAttributes = () => titlesAttributes.map(item =>
  (<li key={item} className="px-4">
    <div key={item} className="inline-flex w-1/6 md:w-1/12">
      <span className="font-bold">{item.substring(0, 3).toUpperCase()}</span>
    </div>
    <div key={item} className="hidden w-1/6 md:inline-flex md:w-3/12 text-center">
      <span className="hidden md:block">{item}</span>
    </div>
    <div className="inline-flex w-1/12 text-center">{formState[item].base}</div>
    <div className="inline-flex w-1/6">
      <input type="number" alt={item} onChange={handleExtraChange} value={formState[item].extras} className="w-full m-2 text-center" />
    </div>
    <div className="inline-flex w-1/6">
      <input type="number" alt={item} onChange={handleEnhancementChange} value={formState[item].enhancement} className="w-full m-2 text-center" />
    </div>
    <div className="inline-flex w-1/6 text-center">
      <Button variant="outlined" size="sm">
        {formState[item].total}
      </Button>
    </div>
    <div className="inline-flex w-1/12 text-left">{formState[item].modifier}</div>
  </li>)
  );

  return (
    <div className="rounded-md bg-blue-100 py-4 overflow-hidden">
      <h1 className="px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">Attributes</h1>
      <ul>
        <li className="px-4">
          <div className="inline-flex w-1/6 md:w-2/6 lg:w-2/6 text-blue-500 text-xs"></div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs text-center">Base</div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs text-center">Extr.</div>
          <div className="inline-flex w-1/12 text-blue-500 text-xs">Enha.</div>
          <div className="inline-flex w-2/12 text-blue-500 text-xs">Total</div>
          <div className="inline-flex w-1/12 text-blue-500 text-xs">Mod.</div>
        </li>
        {renderAttributes()}
      </ul>
    </div>
  )
}

export default Attributes;