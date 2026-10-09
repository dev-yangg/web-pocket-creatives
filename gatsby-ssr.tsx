import { createElement } from "react";
import type { GatsbySSR } from "gatsby";
import App from "./src/App";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => createElement(App, { location: props.location, children: element });

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setHeadComponents,
}) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link
      key="icon"
      rel="icon"
      type="image/svg+xml"
      href="/pocket-creatives-logo.svg"
    />,
  ]);
};
