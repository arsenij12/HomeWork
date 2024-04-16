import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VillaByTheSea from './components/VillaByTheSea';
import HouseInForest from './components/HouseInForest';
import Houseboat from './components/houseboat';
import UpsideDownHouses from './components/UpsideDownHouses';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VillaByTheSea" element={<VillaByTheSea />} />
        <Route path='/HouseInForest' element={<HouseInForest />} />
        <Route path='/houseboat' element={<Houseboat />} />
        <Route path='/UpsideDownHouses' element={<UpsideDownHouses />} />
      </Routes>
    </Router>
  );
}

export default App;
