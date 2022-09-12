import { ChangeEventHandler, FC } from "react";
import "./textField.css";

interface IProps {
  name: string;
  value: string;
  label: string;
  onChange: ChangeEventHandler;
}

const TextField: FC<IProps> = ({ label, name, onChange, value }) => {
  return (
    <div className="text-field">
      <label className="text-field__label">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="text-field__input"
      />
    </div>
  );
};

export default TextField;
