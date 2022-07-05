import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Contact from './components/pages/Contact'
import Success from './components/pages/Success'
import Footer from './components/Footer'
import Privacy from './components/pages/Privacy'
import Intro from './components/pages/Intro'
import Map from './components/pages/Map'
import About from './components/pages/About'
import Execs from './components/pages/Execs'
import Tania from './components/pages/Tania'
import Michael from './components/pages/Michael'
import Marilyn from './components/pages/Marilyn'
import NewsStand from './components/pages/NewsStand'
import GasStarOverview from './components/pages/GasStarOverview'
import GastarValue from './components/pages/GastarValue'
import GastarRisk from './components/pages/GastarRisk'
import GastarHosting from './components/pages/GastarHosting'
import GastarSecurity from './components/pages/GastarSecurity'
import GasSupply from './components/GastarSolutions/GasSupply'
import RetailChoice from './components/GastarSolutions/RetailChoice'
import NaturalGas from './components/GastarSolutions/NaturalGas'
import Pipeline from './components/GastarSolutions/Pipeline'
import RetailGas from './components/GastarSolutions/RetailGas'
import Producer from './components/GastarSolutions/Producer'
import Midstream from './components/GastarSolutions/Midstream'
import Natgas from './components/GastarSolutions/Natgas'
import CustomSolutions from './components/Services/Index'
import Consulting from './components/Services/Consulting'
import CustomerSupport from './components/Services/CustomerSupport'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap'
import './assets/css/styles.css';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path='/' element={<Nav />} /> */}
        <Route path='/' element={<Intro />} />
        <Route path='/map' element={<Map />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/executive-team' element={<Execs />} />
        <Route path='/tania-demeris' element={<Tania />} />
        <Route path='/michael-smith' element={<Michael />} />
        <Route path='/marilyn-smith' element={<Marilyn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/success' element={<Success />} />
        <Route path='/newsstand' element={<NewsStand />} />
        <Route path='/gastar-overview' element={<GasStarOverview />} />
        <Route path='/gastar-value' element={<GastarValue />} />
        <Route path='/gastar-risk' element={<GastarRisk />} />
        <Route path='/gastar-hosting' element={<GastarHosting />} />
        <Route path='/gastar-security' element={<GastarSecurity />} />
        <Route path='/gastar-solutions-gas-supply' element={<GasSupply />} />
        <Route path='/gastar-retail-choice' element={<RetailChoice />} />
        <Route path='/gastar-natural-gas' element={<NaturalGas />} />
        <Route path='/gastar-pipeline' element={<Pipeline />} />
        <Route path='/gastar-retail-gas' element={<RetailGas />} />
        <Route path='/gastar-producer' element={<Producer />} />
        <Route path='/gastar-midstream' element={<Midstream />} />
        <Route path='/gastar-natgas-producer' element={<Natgas />} />
        <Route path='/gastar-custom-solutions' element={<CustomSolutions />} />
        <Route path='/gastar-consulting' element={<Consulting />} />
        <Route path='/gastar-customer-support' element={<CustomerSupport />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
