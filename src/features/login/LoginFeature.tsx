import { PasswordInput, TextInput } from "../../components/components.export";
import useForm from "../../hooks/useForm";
import "./loginForm.css";

interface ILoginState {
  identity: string;
  password: string;
}

const LoginForm = () => {
  const { onChange, onSubmit, state } = useForm<ILoginState>({
    identity: "",
    password: "",
  });

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <TextInput
        label="Username or Email"
        value={state.identity}
        onChange={onChange}
        name="identity"
      />
      <PasswordInput
        label="Password"
        name="password"
        onChange={onChange}
        value={state.password}
        isWithForgotPassword={true}
      />
      <button className="btn_primary" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
