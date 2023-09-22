import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Footer from "./component/header/Footer";
import Signup from "./component/auth/Signup";
import Login from "./component/auth/Login";
import RegisterCampaign from "./component/camapaign/RegisterCampaign";
import UpdateCampaign from "./component/camapaign/UpdateCampaign";
import Contact from "./component/contact/Contact";
import ViewCampaign from "./component/camapaign/ViewCampaign";
import DetailCampaign from "./component/camapaign/DetailCampaign";
import AboutUs from "./component/about/About";
import AllUsers from "./component/admin/AllUsers";
import AllCampaign from "./component/admin/AllCampaign";
import AddComment from "./component/comment/AddComment";
import PayAmount from "./component/payment/PayAmount";
import { useEffect } from "react";

import PrivateRoute from "./component/route/ProtectedRoute";
import { loadUser } from "./action/userAction";
import ViewComments from "./component/comment/ViewComments";
import AdminSignup from "./component/admin/AdminSignup";
import AdminLogin from "./component/admin/AdminLogin";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, user } = useSelector(
    (state) => state.loadUser
  );

  let adminID;

  if (user && user._id) {
    adminID = user.role;
  } else {
    console.log("User or _id is not available yet.");
  }
  console.log(adminID);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  const isAdminSection = window.location.pathname.startsWith("/admin");
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment" element={<AddComment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route
          path="/comments/read/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <ViewComments />
            </PrivateRoute>
          }
        />
        <Route
          path="/campaign/register"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <RegisterCampaign />
            </PrivateRoute>
          }
        />

        <Route
          path="/campaign/update/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <UpdateCampaign />
            </PrivateRoute>
          }
        />

        <Route
          path="/campaign/delete/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <UpdateCampaign />
            </PrivateRoute>
          }
        />

        <Route
          path="/campaign/view"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <ViewCampaign />
            </PrivateRoute>
          }
        />

        <Route
          path="/pay/amount"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <PayAmount />
            </PrivateRoute>
          }
        />

        <Route
          path="/campaign/details/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isUser={user}>
              <DetailCampaign />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/logins"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <AdminLogin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/signup"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <AdminSignup />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/all/campaign"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <AllUsers />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              isUser={user}
              isAdminId={adminID}
              isAdmin={true}
            >
              <AllCampaign />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
