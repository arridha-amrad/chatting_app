import './signupPage.css';
import BgSignup from '../../images/bg.jpg';
import SignUpForm from '../../features/signup/signupFeatures';

const SignUp = () => {
  return (
    <section id="signup_page">
      <main className="main">
        <div className="sidebar">
          <img className="background" src={BgSignup} alt="bg-signup" />
        </div>
        <div className="content">
          <nav className="navbar">
            <button className="btn_login">Login</button>
          </nav>
          <div className="signup_form_container">
            <div className="signup_form">
              <h1>Sign Up to Messenger</h1>
              <button className="btn_google">
                <div className="icon_container">
                  <i className="fa-brands fa-google"></i>
                </div>
                <p>Login with Google</p>
              </button>
              <div className="divider">
                <p>OR</p>
              </div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default SignUp;
