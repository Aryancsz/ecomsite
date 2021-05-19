import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import LoginPage from "./components/LoginPage";
import OrderPlace from "./components/OrderPlace";

function App() {
  let log = "";
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path={"/login"} exact component={LoginPage} log={log} />
        <Route path={"/"} exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/orderPlaced" exact component={OrderPlace} />
      </Provider>
    </Router>
  );
}

export default App;
