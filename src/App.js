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

      <Properties></Properties>
      <DetailsPageHome></DetailsPageHome>
      <BidProductPage></BidProductPage>
    
    </div>
  );
}

export default App;
