import './loginPage.style.css';
import BgLogin from '../../images/bg_login.jpg';
import { LoginForm } from '../../features/features.export';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <section id="login_page">
      <div className="content">
        <nav>
          <button onClick={() => navigate('/signup')} className="btn_primary">
            Sign Up
          </button>
        </nav>
        <div className="signup_form_container">
          <div className="signup_form">
            <h1>Sign In to Messenger</h1>
            <button className="btn_google">
              <div className="icon_container">
                <i className="fa-brands fa-google"></i>
              </div>
              <p>Login with Google</p>
            </button>
            <div className="divider">
              <p>OR</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <img src={BgLogin} alt="bg-login" />
      </div>
      <footer>
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default LoginPage;
