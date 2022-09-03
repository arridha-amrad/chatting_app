import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './signupFeatures.css';

const SignUpForm = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="signup_form">
      <div className="name_container">
        <div className="item1">
          <div className="input_wrapper">
            <label>First Name</label>
            <input className="text_input" />
          </div>
        </div>
        <div className="item2">
          <div className="input_wrapper">
            <label>Last Name</label>
            <input className="text_input" />
          </div>
        </div>
      </div>
      <div className="input_wrapper">
        <label>Email Address</label>
        <input className="text_input" />
      </div>
      <div className="input_wrapper">
        <div className="password_label_container">
          <label>Password</label>
          <Link className="link" to="/">
            Forgot password
          </Link>
        </div>
        <input className="text_input" />
        <div className="show_password_container">
          <input className="check_input" type="checkbox" />
          <label>Show Password</label>
        </div>
      </div>
      <button type="submit" className="btn_signup">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
