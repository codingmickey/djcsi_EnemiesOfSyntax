import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PaintWall from './pages/PaintWall';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/paint' element={<PaintWall />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
