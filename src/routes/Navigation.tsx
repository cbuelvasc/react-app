import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";


export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React" />
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
