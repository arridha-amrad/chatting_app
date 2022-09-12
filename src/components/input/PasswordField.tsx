import { ChangeEventHandler, FC, useState } from "react";
import { Link } from "react-router-dom";
import "./textField.css";

interface IProps {
  name: string;
  label: string;
  onChange: ChangeEventHandler;
  value: string;
  isWithForgotPassword?: boolean;
}

const PasswordInput: FC<IProps> = ({
  label,
  name,
  onChange,
  value,
  isWithForgotPassword = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="password-field">
      <div className="password-field__label-container">
        <label className="password-field__label">{label}</label>
        {isWithForgotPassword && (
          <Link className="dom-link" to="/forgot-password">
            Forgot Password
          </Link>
        )}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        className="password-field__input"
      />
      <div className="password-field__show-password">
        <input
          checked={isShowPassword}
          onChange={(_) => setIsShowPassword(!isShowPassword)}
          className="password-field__checkbox"
          type="checkbox"
        />
        <label className="password-field__show-password__label">
          Show Password
        </label>
      </div>
    </div>
  );
};

export default PasswordInput;
