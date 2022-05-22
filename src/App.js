import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login/Login';
import Purchase from './Pages/Auth/Purchase/Purchase';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Signup from './Pages/Auth/Sign up/Signup';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/My Portfolio/MyPortfolio';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
