import React from "react";
import { Markdown, withTheme } from "dotnetify-elements";
import Article from "../components/Article";

export const DotNetifyTesting = withTheme(() => (
  <Article vm="DotNetifyTesting" id="Content">
    <Markdown id="Content" />
  </Article>
));

export const DotNetifyLoadTester = withTheme(() => (
  <Article vm="DotNetifyLoadTester" id="Content">
    <Markdown id="Content" />
  </Article>
));