import * as React from "react";
import logo from "../../assets/logogid.png";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.styles.css";
import { useAuth } from "@/Context/AuthContext";

type loggedType = {
  logged?: boolean;
  colorNameLogo?: boolean;
  colorNameNav?: boolean;
};

type RoutesType = {
  label: string;
  route: string;
};

const publicRoutes: RoutesType[] = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Sobre nosotros",
    route: "/aboutUs",
  },
  {
    label: "Servicios",
    route: "/service",
  },
  {
    label: "Contacto",
    route: "/contact-us",
  },
];

const privateRoutes: RoutesType[] = [
  {
    label: "Sobre nosotros",
    route: "/aboutUs",
  },
  {
    label: "Servicios",
    route: "/service",
  },
  {
    label: "Contacto",
    route: "/contact-us",
  },
];

const Header: React.FC<loggedType> = ({ colorNameLogo = false, colorNameNav = false }: loggedType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth() as any;
  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);
  const routesToDisplay = isAuthenticated ? privateRoutes : publicRoutes;

  React.useEffect(() => {
    const matchingRoute = routesToDisplay.find(route => route.route === location.pathname);
    if (matchingRoute) {
      setSelectedRoute(matchingRoute.label);
    } else {
      setSelectedRoute(null);
    }
  }, [location.pathname]);

  return (
    <header className="Header">
      <div
        className="Header-logo"
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="DreamHome" className="Header-logo__log" />
        <p className={`${colorNameLogo ? 'Header-logo__text black-text' : 'Header-logo__text'}`}>DreamHome</p>
      </div>
      <ul className="Header-navbar">
        {routesToDisplay.map(({ label, route }) => (
          <li
            key={label}
            className={`${
              selectedRoute === label ? "header-selected" : ""
            } Header-navbar__item ${colorNameNav ? 'Header-navbar__item_color' : ""}`}
            onClick={() => navigate(route)}
          >
            {label}
          </li>
        ))}
       <li className="Header-navbar__join" onClick={() => navigate(isAuthenticated ? "/principal" : "/create-account")}>
          {isAuthenticated ? "Principal" : "Ingresar" }
        </li>
      </ul>
    </header>
  );
};

export default Header;
