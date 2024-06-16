import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/authContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn); // Выводим значение isLoggedIn для отладки
    if (!isLoading && !isLoggedIn) {
      console.log("User is not logged in!");
    }
  }, [isLoggedIn, isLoading]);

  if (isLoading) {
    return null; // Можно также показать загрузочный индикатор
  }

  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;
