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
import HomeInventions from './components/inventions/HomeInventions';
import ProgramableComputer from './components/inventions/ProgramableComputer';
import Internet from './components/inventions/Internet';
import Bitcoin from './components/inventions/Bitcoin';
import EmailForm from './components/Form/EmailForm';
import Cars from './components/CarsInventions/Cars';
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
        <Route path='/HomeInventions' element={<HomeInventions/>}/>
        <Route path='/ProgramableComputer' element={<ProgramableComputer/>}/>
        <Route path='/Internet' element={<Internet/>}/>
        <Route path='/Bitcoin' element={<Bitcoin/>}/>
        <Route path='/Form' element={<EmailForm/>}/>
        <Route path='/Cars' element={<Cars/>}/>
      </Routes>
    </Router>
  );
}

export default App;
