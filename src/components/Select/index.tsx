import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface OptionProps {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<OptionProps>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((item: OptionProps) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
