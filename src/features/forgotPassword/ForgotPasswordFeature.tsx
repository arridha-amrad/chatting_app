import { TextInput } from "../../components/components.export";
import useForm from "../../hooks/useForm";
import "./forgotPasswordFeature.css";

const ForgotPasswordForm = () => {
  const { onChange, onSubmit, state } = useForm({ email: "" });
  return (
    <form onSubmit={onSubmit} className="forgot-password-form">
      <TextInput
        label="Email Address"
        name="email"
        onChange={onChange}
        value={state.email}
      />
      <button className="btn_primary">Submit</button>
    </form>
  );
};

export default ForgotPasswordForm;
