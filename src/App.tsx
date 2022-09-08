import { Route, Routes } from 'react-router-dom';
import {
  ForgotPasswordPage,
  ChattingPage,
  LoginPage,
  SignUpPage,
} from './pages/pages.export';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChattingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
};

export default App;
