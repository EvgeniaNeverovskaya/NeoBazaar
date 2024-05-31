import { React, useLayoutEffect } from "react";
import Home from "../pages/Home/home";
import PrivacyPolice from "../pages/privacyPolice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfService from "../pages/termsOfService";
import LogIn from "../pages/logIn";
import { useLocation } from "react-router-dom";
import SignUp from "../pages/signUp";
import ProductCatalog from "../pages/CardList/productCatalog";
import CategoryFilter from "../pages/CardList/_categoryFilter";
import UserMenu from "../components/userMenu";
import Products from "../pages/products";
import NewProducts from "../pages/NewProducts/newProducts";
import ResetPasswords from "../pages/resetPasswords";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AllRoutes = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy-policy' element={<PrivacyPolice />} />
      <Route path='/terms-of-service' element={<TermsOfService />} />
      <Route path='/log-in' element={<LogIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/reset' element={<ResetPasswords />} />
      <Route path='/:category' element={<ProductCatalog />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/new' element={<NewProducts/>} />



    </Routes>
  </Router>
);
export default AllRoutes;
