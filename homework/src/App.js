import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VillaByTheSea from './components/House/VillaByTheSea';
import HouseInForest from './components/House/HouseInForest';
import Houseboat from './components/House/houseboat';
import UpsideDownHouses from './components/House/UpsideDownHouses';
import HomeUnusualHouse from './components/House/HomeUnusualhouse';
import HomeUnusualmusems from './components/Museums/HomeUnusualmusems';
import MuseumOfIllusions from './components/Museums/MuseumOfIllusions';
import ChocolateMuseum from './components/Museums/ChocolateMuseum';
import ToyMuseum from './components/Museums/ToyMuseum';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VillaByTheSea" element={<VillaByTheSea />} />
        <Route path='/HouseInForest' element={<HouseInForest />} />
        <Route path='/houseboat' element={<Houseboat />} />
        <Route path='/UpsideDownHouses' element={<UpsideDownHouses />} />
        <Route path='/HomeUnusualhouse' element={<HomeUnusualHouse />} />
        <Route path='/HomeUnusualmusems' element={<HomeUnusualmusems />} />
        <Route path='/MuseumOfIllusions' element={<MuseumOfIllusions />} />
        <Route path='/ChocolateMuseum' element={<ChocolateMuseum />} />
        <Route path='/ToyMuseum' element={<ToyMuseum />} />
      </Routes>
    </Router>
  );
}

export default App;
