import { Password } from "primereact/password";
import React, { FC, useState } from "react";

type InputFieldProps = {
  onChange: (value: string) => void;
  name: string;
};

const PasswordInputField: FC<InputFieldProps> = ({ onChange, name }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="card flex justify-center w-full items-center">
      <span className="p-float-label flex items-center justify-center w-5/6">
        <Password
          value={value}
          onChange={handleInputChange}
          feedback={false}
          toggleMask
          className="w-full"
          inputStyle={{ width: "100%" }}
        />
        <label htmlFor="password">{name}</label>
      </span>
    </div>
  );
};

export default PasswordInputField;
