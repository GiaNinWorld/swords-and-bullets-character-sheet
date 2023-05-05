import React, { useEffect, useContext, useState } from "react";
import { Input } from "@material-tailwind/react";
import FormContext from "./FormContext";
import { data as Initdata } from './data';

function Stats() {
    const { data, setData } = useContext(FormContext);
    const [lifeRoll, setLifeRoll] = useState(0);

    const updateStatsByAttributes = () => {
        let attributes = data.attributes;
        let stats = data.stats;
        let agilityBonus = attributes.Agility.modifier;
        let perceptionBonus = attributes.Perception.modifier;
        let resistenceBonus = attributes.Resistence.modifier;
        let willBonus = attributes.Will.modifier;
        let life = (lifeRoll + resistenceBonus + willBonus);
        console.log('lifeRoll: ',lifeRoll);

        stats.passiveAttention = Math.floor(perceptionBonus / 2);
        stats.naturalarmour = resistenceBonus; // + enhancements
        stats.iniciative = agilityBonus;
        stats.move = agilityBonus * .5;
        stats.life = {current: life, total: life};
        stats.criticalDamage = {current: 0, total: 0};
        stats.fervor = {current: willBonus, total: willBonus};
        stats.blood = {current: resistenceBonus * 2, total: resistenceBonus * 2};
        stats.breath = {current: resistenceBonus * 2, total: resistenceBonus * 2};
        stats.condition = [];
    
        setData({
          ...data,
          stats: stats
        });
      };
      
      useEffect(() => {
        if (JSON.stringify(data.attributes) !== JSON.stringify(Initdata.attributes)) {
          updateStatsByAttributes()
        };
      }, [data.attributes])
      
      useEffect(() => {
        if (lifeRoll === 0) {
            setLifeRoll(Math.floor(Math.random() * 5) + 1);
        };
      }, [])

    return (
        <div className="rounded-md bg-blue-100 py-4 overflow-hidden h-full">
            <h1 className="px-3 py-2 mx-3 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md">Stats</h1>
            <ul className='columns-2 gap-0'>
                <li className='py-2 px-4'>
                Passive Attention: {data.stats.passiveAttention }
                </li>
                <li className='py-2 px-4'>
                    <Input label={'Natural Armour'} onChange={()=>{}} value={data.stats.naturalarmour} />
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    <Input label={'Life'} onChange={()=>{}} value={data.stats.life.current} />/{data.stats.life.total}
                    </div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    <Input label={'Crit. Damage'} onChange={()=>{}} value={data.stats.criticalDamage.current} />/{data.stats.criticalDamage.total}
                    </div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>Iniciative: {data.stats.iniciative}</div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    Move: {data.stats.move}
                    </div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    <Input label={'Fervor'} onChange={()=>{}} value={data.stats.fervor.current} />/{data.stats.fervor.total}
                    </div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    <Input label={'Blood'} onChange={()=>{}} value={data.stats.blood.current} />/{data.stats.blood.total}
                    </div>
                </li>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/2'>
                    <Input label={'Breath'} onChange={()=>{}} value={data.stats.breath.current} />/{data.stats.breath.total}
                    </div>
                </li> 
            </ul>
            {/* <ul>
                <li className='py-2 px-4'>
                    <div className='inline-flex w-1/4'>Condition</div>
                    <div className='inline-flex w-3/4'><Input className='w-full' /></div>
                </li>
            </ul> */}
        </div>
    )
}

export default Stats