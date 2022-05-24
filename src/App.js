import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyOrders from './Components/Auth Nested Route/User/MyOrders/MyOrders';
import MyProfile from './Components/Auth Nested Route/User/MyProfile/MyProfile';
import AddReviews from './Components/Auth Nested Route/User/MyReviews/AddReviews';



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
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addreviews" element={<AddReviews></AddReviews>}></Route>
        </Route>
        <Route path="myportfolio" element={<MyPortfolio />} />
        <Route path="purchase/:purchaseId" element={
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
