import Profile from './Components/Profile/Profile';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbaar from './Components/Profile/Navbar/Navbaar';
import HomePage from './Components/Profile/HomePage/HomePage';
import AboutUs from './Components/Profile/AboutUs/AboutUs';
// import Product from './Components/Profile/Products/Product';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import Products from './Components/AllProduts/Products';
import productData from './Components/AllProduts/ProductData';
import AllProduct from './CompanyProduct/AllProduct';
function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Navbaar />
      
      <Routes>
      <Route exact path="/" element={[<HomePage />,<AboutUs />,<Products productData={productData}/>,<ContactUs />]} />
      <Route exact path="/aboutUs" element={<AboutUs />} />
      <Route exact path="/products" element={[<Product />,<Products productData={productData}/>]} />
      <Route exact path="/contactUs" element={<ContactUs />} />
     
     
      
      
      </Routes>
      
      
      
     
      
      <Footer />
    </BrowserRouter> */}
      {/* <Profile /> */}

      <Navbaar />
      <HomePage />
      <AboutUs />
      <AllProduct />
      {/* <Products productData={productData} /> */}
      <ContactUs />
      <Footer />
      
      
    </>
  );
}

export default App;
