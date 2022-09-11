import { ChangeEventHandler, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './passwordInput.style.css';

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
    <div className="input_wrapper">
      <div className="password_label_container">
        <label>{label}</label>
        {isWithForgotPassword && (
          <Link className="link" to="/forgot-password">
            Forgot Password
          </Link>
        )}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={isShowPassword ? 'text' : 'password'}
        className="text_input"
      />
      <div className="show_password_container">
        <input
          checked={isShowPassword}
          onChange={(_) => setIsShowPassword(!isShowPassword)}
          className="check_input"
          type="checkbox"
        />
        <label>Show Password</label>
      </div>
    </div>
  );
};

export default PasswordInput;
