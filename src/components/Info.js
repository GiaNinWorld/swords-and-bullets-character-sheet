import React, { useEffect, useContext } from "react";
import { CONSTANTS } from "../assets/mocks/const.js";
import { Input, Select, Option } from "@material-tailwind/react";
import FormContext from "./FormContext";
import { data as Initdata } from './data';

function Info() {
    const { data, setData } = useContext(FormContext);

    const titlesInfo = Object.keys(data.info);
    const titleCss = "px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md";

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase()
            + word.slice(1)
    }

    const renderOptions = (item) => {
        const iterator = (item + "s").toString().toUpperCase();
        
        const response = CONSTANTS[iterator].map(option => {
            return (
            <Option key={option.name} value={`${item},${option.id.toString()}`}>
                {option.name}
            </Option>
        )});
        return response;
    }

    const handleChange = (event) => {
        if (typeof event === 'string' || event instanceof String) {
            let values = event.split(',');
            let name = (values[0]).concat('s').toUpperCase();
            let object = CONSTANTS[name].filter(item => {
                return item.id.toString() === values[1].toString();
            })[0];
            console.log(object);
            setData({
                ...data,
                info: {
                    ...data.info,
                    [values[0].toLowerCase()]: object
                }
            });
        } else {
            setData({
                ...data,
                info: {
                    ...data.info,
                    [(event.target.name).toLowerCase()]: event.target.value
                }
            });
        }
    };

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(Initdata)) {
            console.log(data);
        }
    }, [data]);

    const renderTitles = () => titlesInfo.map((item, index) =>
    (<li key={item} className="p-4 pt-2 pb-2">
        {(index > 1)
            ? (<Select
                name={item}
                label={capitalize(item)}
                onChange={handleChange}
                selected={() => data.info[item]?.name }
                >
                    {renderOptions(item, index)}
                </Select>
            ) : <Input name={item} label={capitalize(item)} onChange={handleChange} value={data.info[item]} />
        }
    </li>)
    );

    return (
        <div className="rounded-md bg-blue-100 py-4">
            <h1 className={titleCss}>Info</h1>
            <form>
                <ul className="columns-1 md:columns-2 gap-0">
                    {renderTitles()}
                </ul>
            </form>
        </div>
    )
}

export default Info;