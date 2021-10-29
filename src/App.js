import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import NoteFound from './Components/NoteFound/NoteFound';
import Contact from './Components/Contact/Contact';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddANewOrder from './Components/AddANewOrder/AddANewOrder';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TripDetail from './Components/TripDetail/TripDetail';
import TripConfirmation from './Components/TripConfirmation/TripConfirmation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/manage-all-orders">
            <ManageAllOrders></ManageAllOrders>
          </Route>

          <Route path="/add-new-service">
            <AddANewOrder></AddANewOrder>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/trip-detail/:id">
            <TripDetail></TripDetail>
          </PrivateRoute>

          <Route path="/trip-confirm">
            <TripConfirmation></TripConfirmation>
          </Route>

          <Route to="*">
            <NoteFound></NoteFound>
          </Route>

        </Switch>
        <Footer></Footer>

      </Router>
    </AuthProvider>
  );
}

export default App;
