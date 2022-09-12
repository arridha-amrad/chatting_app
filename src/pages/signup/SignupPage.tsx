import './signupPage.css';
import BgSignup from '../../images/bg.jpg';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../features/signup/SignupFeatures';
import GoogleIcon from '../../icons/googleIcon';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <section id="signup-page">
      <main className="signup-page__main">
        <div className="signup-page__sidebar">
          <img className="signup-page__image" src={BgSignup} alt="bg-signup" />
        </div>
        <div className="signup-page__content">
          <nav className="signup-page__navbar">
            <button onClick={() => navigate('/login')} className="btn_primary">
              Login
            </button>
          </nav>
          <div className="signup-page__form-container">
            <div className="signup-page__form">
              <h1 className="signup-page__form-title">Sign Up to Messenger</h1>
              <button className="btn-google">
                <div className="btn-google__icon">
                  <GoogleIcon />
                </div>
                <p className="btn-google__title">Login with Google</p>
              </button>
              <div className="signup-page__form-divider">
                <p>OR</p>
              </div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </main>
      <footer className="signup-page__footer">
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default SignUp;
