import { createElement } from "react";
import type { GatsbyBrowser } from "gatsby";
import "@fontsource-variable/inter/wght.css";
import "swiper/css/autoplay";
import App from "./src/App";
import "./src/styles/index.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => createElement(App, { location: props.location, children: element });

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
  routerProps: { location },
  prevRouterProps,
}) => {
  // Same page, only the query changed (filter or pagination): don't jump to top
  if (
    prevRouterProps &&
    location.pathname === prevRouterProps.location.pathname &&
    !location.hash
  ) {
    return false;
  }
  return true;
};
