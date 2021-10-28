import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import NoteFound from './Components/NoteFound/NoteFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
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

        <Route to="*">
          <NoteFound></NoteFound>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
