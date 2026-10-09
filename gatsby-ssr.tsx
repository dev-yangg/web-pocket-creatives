import type { GatsbySSR } from "gatsby";
import App from "./src/App";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => <App location={props.location}>{element}</App>;
