import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Main from './components/main';
import Carousels from './carousels/carousels';
import Deals from './components/deals';
import ProductItems from './components/products';
import Sale from './pages/sale';
import Points from './pages/keypoints';
import Footer from './pages/footer';
import Footer2 from './pages/footer2';
import Sponsors from './pages/sponsors';
import HomeCarousel from './components/homecarousel';


function App() {

  return (
    <div className="App">

  <Header/>

  <Navbar/>

  <Navbar2/>

  <Main/>

  <HomeCarousel/>
 
 
  <Carousels/>

  <Deals/> 
  <h3>Products</h3>
  <ProductItems/>

  <Sale/>

  <Points/>


  <Sponsors/>

  <Footer/>

  <Footer2/>

    </div>
  );
}

export default App;
