import path from "path";
import type { GatsbyNode } from "gatsby";
import { blogs } from "./src/views/blogs/data";

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPreset({
    name: "babel-preset-gatsby",
    options: { reactRuntime: "automatic" },
  });
};

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createPage } = actions;
  const component = path.resolve(
    "./src/views/blogs/components/BlogInnerTemplate.tsx",
  );

  blogs.forEach(({ slug }) => {
    createPage({
      path: `/blogs/${slug}`,
      component,
      context: { slug },
    });
  });
};
