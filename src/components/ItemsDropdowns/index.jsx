import React, { useState } from 'react'

export const ItemsDropsdowns = ({ options, label, onChange, ...rest }) => {
  const [selectOption, setSelectOption] = useState(String);

  const handleOnChange = (e) => {
    setSelectOption(e.target.value)
  }
  return (
    <div className="relative w-full" {...rest}>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <select 
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        value={selectOption}
        onChange={handleOnChange}
        >
        {options?.map((item) => (
          <option value={item.key} key={`${item.lable}-${item.key}`}>{item.lable}</option>
        ))}
      </select>
    </div>
  )
}
