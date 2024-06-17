import React, { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import PrivacyPolice from "../pages/privacyPolice";
import TermsOfService from "../pages/termsOfService";
import LogIn from "../pages/logIn";
import SignUp from "../pages/signUp";
import ProductCatalog from "../pages/CardList/productCatalog";
import Products from "../pages/Products/products";
import NewProducts from "../pages/Products/NewProducts/newProducts";
import ResetPasswords from "../pages/resetPasswords";
import Cart from "../pages/Cart/cart";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "../components/authContext";
import PrivateRoute from "./privateRouters";
import NewPasswords from "../pages/newPasswords";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AllRoutes = () => (
  <AuthProvider>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy-policy' element={<PrivacyPolice />} />
      <Route path='/terms-of-service' element={<TermsOfService />} />
      <Route path='/log-in' element={<LogIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/reset' element={<ResetPasswords />} />
      <Route path='/new-passwords' element={<NewPasswords />} />
      <Route path='/:category' element={<ProductCatalog />} />
      <Route path='/products' element={<PrivateRoute element={Products} />} />
      <Route path='/products/new' element={<PrivateRoute element={NewProducts} />} />
      <Route path='/cart' element={<PrivateRoute element={Cart} />} />
    </Routes>
  </AuthProvider>
);

export default AllRoutes;
