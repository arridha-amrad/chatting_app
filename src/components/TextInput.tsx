import { ChangeEventHandler, FC } from "react";

interface IProps {
  name: string;
  value: string;
  label: string;
  onChange: ChangeEventHandler;
}

const TextInput: FC<IProps> = ({ label, name, onChange, value }) => {
  return (
    <div className="input_wrapper">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="text_input"
      />
    </div>
  );
};

export default TextInput;
