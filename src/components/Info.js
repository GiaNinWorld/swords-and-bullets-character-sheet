import React, { useEffect, useState } from "react";
import data from "../assets/mocks/character_sheet.json";
import { CONSTANTS } from "../assets/mocks/const.js";

import { Input, Select, Option } from "@material-tailwind/react";

function Info() {
    const info = {
        name: '',
        player: '',
        race: '',
        nation: '',
        background: '',
        size: ''
    }
    const titlesInfo = Object.keys(info);
    const titleCss = "px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md";

    // Adicione um estado para armazenar os valores do formulário
    const [formState, setFormState] = useState(info);

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase()
        + word.slice(1)
    }

    const renderOptions = (item, index) => {
        const iterator = (item + "s").toString().toUpperCase();
        const response = CONSTANTS[iterator].map(option => <Option key={option} value={item +','+ option}>{option}</Option>);
        return response;
    }

    const handleChange = (event) => {
        // Atualize o estado com o novo valor do formulário
        if (typeof event === 'string' || event instanceof String) {
            let values = event.split(',');
            setFormState({
                ...formState,
                [values[0].toLowerCase()]: values[1]
            });
        } else {
            setFormState({
                ...formState,
                [(event.target.name).toLowerCase()]: event.target.value
            });
        }
    };

    useEffect(()=> {
        console.log(formState);
    },[formState])

    const renderTitles = () => titlesInfo.map((item, index) =>
    (<li key={item} className="p-4 pt-2 pb-2">
        {(index > 1)
            ? (<Select name={item} label={capitalize(item)} onChange={handleChange}>
                {renderOptions(item, index)}
            </Select>)
            : <Input name={item} label={capitalize(item)} onChange={handleChange} value={formState[item]} />
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