import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "../../features/features.export";
import "./forgotPassword.css";

const ForgotPasswordPage = () => {
  return (
    <section id="forgot-password-page">
      <main>
        <div className="forgot-password-page__form">
          <h1 className="forgot-password-page__form-title">
            Reset Password Request
          </h1>
          <ForgotPasswordForm />
          <Link to="/login" className="forgot-password-page__link dom-link">
            Back to login
          </Link>
        </div>
      </main>
      <footer className="forgot-password-page__footer">
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default ForgotPasswordPage;
