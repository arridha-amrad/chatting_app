import { Route, Routes } from 'react-router-dom';
import {
  ForgotPasswordPage,
  ChattingPage,
  LoginPage,
  SignUpPage,
} from './pages/pages.export';
import './App.css';
import GoogleIcon from './icons/googleIcon';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChattingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/test" element={<GoogleIcon />} />
    </Routes>
  );
};

export default App;
