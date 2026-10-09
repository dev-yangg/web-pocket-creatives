import type { GatsbyBrowser } from "gatsby";
import "@fontsource-variable/inter/wght.css";
import "swiper/css/autoplay";
import App from "./src/App";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => <App location={props.location}>{element}</App>;

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
  routerProps: { location },
  prevRouterProps,
}) => {
  if (
    prevRouterProps &&
    location.pathname === prevRouterProps.location.pathname &&
    !location.hash
  ) {
    return false;
  }
  return true;
};
