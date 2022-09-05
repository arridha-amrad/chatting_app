import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "../../features/features.export";
import "./forgotPassword.style.css";

const ForgotPasswordPage = () => {
  return (
    <section id="forgot_password_page">
      <main>
        <div className="form">
          <h1>Reset Password Request</h1>
          <ForgotPasswordForm />
          <Link to="/login" className="link">
            Back to login
          </Link>
        </div>
      </main>
      <footer>
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default ForgotPasswordPage;
