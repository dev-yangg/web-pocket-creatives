import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/home/Homepage";
import AboutPage from "./pages/about/AboutPage";
import WorksPage from "./pages/works/WorksPage";
import HowWeWork from "./pages/how-we-work/HowWeWork";
import Trainings from "./pages/trainings/Trainings";
import Blogs from "./pages/blogs/Blogs";
import BlogInnerTemplate from "./pages/blogs/components/BlogInnerTemplate";
import ServicesPage from "./pages/services/ServicesPage";
import PricingPage from "./pages/pricing/PricingPage";

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
      {
        path: "works",
        Component: WorksPage,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "pricing",
        Component: PricingPage,
      },
      {
        path: "how-we-work",
        Component: HowWeWork,
      },
      {
        path: "trainings",
        Component: Trainings,
      },
      {
        path: "blogs",
        children: [
          { index: true, Component: Blogs },
          { path: ":slug", Component: BlogInnerTemplate },
        ],
      },
    ],
  },
]);
