import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages/index";
import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy 1",
  },
  {
    to: "lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "Lazy 2",
  },
  {
    to: "lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy 3",
  },
];

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
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
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </div>
  );
};
export default LazyLayout;
