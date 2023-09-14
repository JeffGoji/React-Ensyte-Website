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
import NewsStand2 from './components/pages/NewsStand2'
import NewsStand3 from './components/pages/NewsStand3'
import NewsStand4 from './components/pages/NewsStand4'
import NewsStand5 from './components/pages/NewsStand5'
import NewsStand6 from './components/pages/NewsStand6'
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
import Accounting from './components/GastarSolutions/Accounting'
import LiquidGas from './components/pages/LiquidGas'
import CustomSolutions from './components/Services/Index'
import Consulting from './components/Services/Consulting'
import CustomerSupport from './components/Services/CustomerSupport'
import GastarDashboards from './components/pages/GastarDashboards'
import GastarEbb from './components/GastarSolutions/Ebb'
import Allen from './components/pages/Allen'
import Pooja from './components/pages/Pooja'

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
        <Route path='/allen-williams' element={<Allen />} />
        <Route path='/pooja' element={<Pooja />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/success' element={<Success />} />
        <Route path='/newsstand' element={<NewsStand />} />
        <Route path='/newsstand2' element={<NewsStand2 />} />
        <Route path='/newsstand3' element={<NewsStand3 />} />
        <Route path='/newsstand4' element={<NewsStand4 />} />
        <Route path='/newsstand5' element={<NewsStand5 />} />
        <Route path='/newsstand6' element={<NewsStand6 />} />
        <Route path='/gastar-overview' element={<GasStarOverview />} />
        <Route path='/gastar-value' element={<GastarValue />} />
        <Route path='/gastar-dashboards' element={<GastarDashboards />} />
        <Route path='/gastar-risk' element={<GastarRisk />} />
        <Route path='/gastar-ebb' element={<GastarEbb />} />
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
        <Route path='/gastar-liquid-storage' element={<LiquidGas />} />
        <Route path='/gastar-accounting' element={<Accounting />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
