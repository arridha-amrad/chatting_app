import { PasswordInput, TextInput } from "../../components/components.export";
import useForm from "../../hooks/useForm";
import "./signupFeatures.style.css";
import "../features.shared.style.css";

interface ISignUpState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const { onChange, onSubmit, state } = useForm<ISignUpState>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const { email, firstName, lastName, password } = state;

  return (
    <form onSubmit={onSubmit} className="flex_form">
      <div className="name_container">
        <div className="first_name_container">
          <TextInput
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="last_name_container">
          <TextInput
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
      </div>
      <TextInput
        label="Email Address"
        name="email"
        value={email}
        onChange={onChange}
      />
      <PasswordInput
        label="Password"
        name="password"
        onChange={onChange}
        value={password}
      />
      <button type="submit" className="btn_primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
