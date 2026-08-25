import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/home/Homepage";
import AboutPage from "./pages/about/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
    ],
  },
]);
