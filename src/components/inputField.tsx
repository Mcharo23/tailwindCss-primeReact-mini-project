import { InputText } from "primereact/inputtext";
import React, { FC, useState } from "react";

type InputFieldProps = {
  onChange: (value: string) => void;
  name: string;
  type: string;
};

const CustomInputField: FC<InputFieldProps> = ({ onChange, name, type }) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className=" card flex justify-center w-full items-center">
      <span className="p-float-label flex items-center justify-center w-5/6">
        <InputText
          id="username"
          value={value}
          onChange={handleInputChange}
          className="w-full"
          type={type}
        />
        <label htmlFor="username">{name}</label>
      </span>
    </div>
  );
};

export default CustomInputField;
