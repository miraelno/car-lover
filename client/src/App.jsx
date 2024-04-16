import './App.css';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import AccountPage from './pages/ProfilePage.jsx';
import CarInfo from './pages/CarInfo.jsx';

axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.headers.common = {'Authorization': `Token ${token}`}

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/car/:id' element={<CarInfo />} />
          <Route path="/profile" element={<AccountPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
