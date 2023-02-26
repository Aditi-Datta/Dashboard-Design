import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";
import Properties from './Components/PropertiesProductPage/Properties';
import DetailsPageHome from './Components/ProductPageProperties/DetailsProductPage/DetailsPageHome';
import BidProductPage from './Components/BidProductPage/BidProductPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Properties></Properties>
          </Route>
          <Route path="/properties">
            <Properties></Properties>
          </Route>
          <Route path="/details">
            <DetailsPageHome></DetailsPageHome>
          </Route>
          <Route path="/bid">
            <BidProductPage></BidProductPage>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
