import './loginPage.css';
import BgLogin from '../../images/bg_login.jpg';
import { LoginForm } from '../../features/features.export';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../../icons/googleIcon';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <section id="login-page">
      <div className="login-page__content">
        <nav className="login-page__navbar">
          <button onClick={() => navigate('/signup')} className="btn_primary">
            Sign Up
          </button>
        </nav>
        <div className="login-page__form-container">
          <div className="login-page__form">
            <h1 className="login-page__form-title">Sign In to Messenger</h1>
            <button className="btn-google">
              <div className="btn-google__icon">
                <GoogleIcon />
              </div>
              <p className="btn-google__title">Login with Google</p>
            </button>
            <div className="login-page__form-divider">
              <p>OR</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="login-page__sidebar">
        <img className="login-page__image" src={BgLogin} alt="bg-login" />
      </div>
      <footer className="login-page__footer">
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default LoginPage;
