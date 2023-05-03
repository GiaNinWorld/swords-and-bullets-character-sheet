import { useState } from "react";

const NumberInput = ({ value: initialValue, label, onChange, size, containerProps, labelProps }) => {
  const [value, setValue] = useState(initialValue || 0);

  function decrement() {
    setValue(prevValue => prevValue - 1);
  }

  function increment() {
    setValue(prevValue => prevValue + 1);
  }

  const containerClassName = `custom-number-input h-10 w-32 ${containerProps || ''}`;
  const labelClassName = `w-full text-gray-700 text-sm font-semibold ${labelProps || ''}`;
  const decrementClassName = "bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none";
  const inputClassName = `outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none ${size || ''}`;
  const incrementClassName = "bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer";

  return (
    <div className={containerClassName}>
      <label htmlFor="custom-input-number" className={labelClassName}>
        {label || 'Counter Input'}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className={decrementClassName}
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className={inputClassName}
          name="custom-input-number"
          value={value}
          onChange={e => {
            setValue(Number(e.target.value));
            onChange && onChange(Number(e.target.value));
          }}
        />
        <button
          data-action="increment"
          className={incrementClassName}
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default NumberInput;
