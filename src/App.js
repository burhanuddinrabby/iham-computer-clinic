import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs'
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Appointment/Purchase';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import Footer from './Pages/Shared/Footer';
import ManageOrders from './Pages/Dashboard/ManageOrders';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='text-[#bcb4b4]' style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<About />} />
          <Route path="blogs" element={<Blogs></Blogs>} />
          <Route path="purchase/:id" element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index path="my-profile" element={<MyProfile></MyProfile>}></Route>
            <Route path='my-orders' element={<MyOrders></MyOrders>}></Route>
            <Route path="add-review" element={<AddReview></AddReview>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="manage-orders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
            <Route path="addDoctor" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path="manage-products" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
