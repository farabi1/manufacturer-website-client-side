import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserOrders from './Components/Auth Nested Route/User/UserOrders/UserOrders';
import UserProfile from './Components/Auth Nested Route/User/UserProfile/UserProfile';
import UserReviews from './Components/Auth Nested Route/User/UserReviews/UserReviews';
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
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<UserOrders></UserOrders>}></Route>
          <Route path="userprofile" element={<UserProfile></UserProfile>}></Route>
          <Route path="userreviews" element={<UserReviews></UserReviews>}></Route>
        </Route>
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
