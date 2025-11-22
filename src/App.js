import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.js";
import Restaurant from "./components/Restaurant.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Searchfood from "./components/Searchfood.js";
import SecondaryHome from "./components/SecondaryHome.js";
import store from"./store/stores.js";
import {Provider} from "react-redux";
// Define your routes as an array (like your old RouteConfig)

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <SecondaryHome />,
    children: [
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/city/delhi/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/city/delhi/:id/search",
        element: <Searchfood />,
      },
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

// App component
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
