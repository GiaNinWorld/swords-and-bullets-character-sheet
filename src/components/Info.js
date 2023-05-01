import React, { useEffect, useContext } from "react";
import { CONSTANTS } from "../assets/mocks/const.js";
import { Input, Select, Option } from "@material-tailwind/react";
import FormContext from "./FormContext";

function Info() {
    
    // const [data, setData] = useState(info);
    const { data, setData } = useContext(FormContext);
    
    const titlesInfo = Object.keys(data.info);
    const titleCss = "px-3 py-2 mx-3 mb-2 font-bold text-blue-800 tracking-wider bg-blue-200 rounded-md";

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase()
        + word.slice(1)
    }

    const renderOptions = (item, index) => {
        const iterator = (item + "s").toString().toUpperCase();
        const response = CONSTANTS[iterator].map(option => <Option key={option} value={item +','+ option.value}>{option.name}</Option>);
        return response;
    }

    const handleChange = (event) => {
        // Atualize o estado com o novo valor do formulário
        if (typeof event === 'string' || event instanceof String) {
            let values = event.split(',');
            setData({
                ...data,
                    info: {
                        ...data.info,
                        [values[0].toLowerCase()]: values[1]
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

    useEffect(()=> {
        console.log(data);
    },[data])

    const renderTitles = () => titlesInfo.map((item, index) =>
    (<li key={item} className="p-4 pt-2 pb-2">
        {(index > 1)
            ? (<Select name={item.name} label={capitalize(item.name)} onChange={handleChange} value={data[item].id}>
                {renderOptions(item, index)}
                </Select>
            ) : <Input name={item} label={capitalize(item)} onChange={handleChange} value={data[item]} />
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