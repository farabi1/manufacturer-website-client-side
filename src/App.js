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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageAllOrders from './Components/Auth Nested Route/Admin/Manage All Orders/ManageAllOrders';
import ManageProducts from './Components/Auth Nested Route/Admin/Manage Products/ManageProducts';
import MakeAdmin from './Components/Auth Nested Route/Admin/Make Admin/MakeAdmin';
import AddProducts from './Components/Auth Nested Route/Admin/Add A Product/AddProducts';

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
          <Route path="manageallorder" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="manageproduct" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="users" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="addproducts" element={<AddProducts></AddProducts>}></Route>
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
      <ToastContainer />
    </div>
  );
}

export default App;
