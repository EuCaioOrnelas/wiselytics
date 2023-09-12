import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// config router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login/Login.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import PrecoTetoAcoes from "./pages/PrecoTetoAcoes/PrecoTetoAcoes.jsx";
import PrecoTetoFiis from "./pages/PrecoTetoFiis/PrecoTetoFiis.jsx";
import PlanilhaGeral from "./pages/PlanilhaGeral/PlanilhaGeral.jsx";
import Cursos from "./pages/Cursos/Cursos.jsx";
import Ajuda from "./pages/Ajuda/Ajuda.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "precotetoacoes",
        element: <PrecoTetoAcoes />,
      },
      {
        path: "precotetofiis",
        element: <PrecoTetoFiis />,
      },
      {
        path: "planilhageral",
        element: <PlanilhaGeral />,
      },
      {
        path: "cursos",
        element: <Cursos />,
      },
      {
        path: "ajuda",
        element: <Ajuda />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
