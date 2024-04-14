import './App.css';
import MainPage from './pages/MainPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    
  );
}

export default App;
