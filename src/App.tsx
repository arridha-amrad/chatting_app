import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import SignUp from './pages/signup/signup';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
