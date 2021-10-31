import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import HotelDetail from "./Pages/HotelDetail/HotelDetail";
import Services from "./Pages/Services/Services";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Bookedhotel from "./Pages/MyBookings/BookedHotel/Bookedhotel";
import BookedService from "./Pages/MyBookings/BookedService/BookedService";
import Contact from "./Pages/Contact/Contact";
import PrivateRoute from "./Pages/PrivateRoute/RivateRoute";
import ManageUsers from "./Pages/ManageUsers/ManageUsers";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:serviceID">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/hotels/:hotelID">
              <HotelDetail></HotelDetail>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageusers">
              <ManageUsers></ManageUsers>
            </PrivateRoute>
            <PrivateRoute path="/bookedhotel">
              <Bookedhotel></Bookedhotel>
            </PrivateRoute>
            <PrivateRoute path="/bookedservice">
              <BookedService></BookedService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
