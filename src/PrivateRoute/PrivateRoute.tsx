import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = () => {
  const { user, isAuthenticated, logoutUser, refreshToken } = useAuth();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      if (!user?.accessToken) return;

      try {
        const decodedToken: any = jwtDecode(user.accessToken);
        const exp = decodedToken?.exp;

        if (!exp) return;

        const now = Date.now();
        const expirationTime = exp * 1000;

        const fiveMinutes = 5 * 60 * 1000;

        if (expirationTime - now < fiveMinutes) {
          await refreshToken();
        }
      } catch (error) {
        console.error("Token inválido:", error);
        logoutUser();
      }
    };

    checkTokenExpiration();
  }, [user?.accessToken]);

  if (!isAuthenticated) {
    return <Navigate to="/inicio-sesion" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;