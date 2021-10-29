import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
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
