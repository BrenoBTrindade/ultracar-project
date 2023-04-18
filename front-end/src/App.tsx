import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/registerService';
import './css/app.css'
import UserRegister from './pages/registerUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/main" element={ <Main /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/createCustomer" element={ <UserRegister /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
