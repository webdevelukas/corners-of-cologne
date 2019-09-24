import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

h1 {
  font-family: "Faster One", cursive;
  font-size: 1.5em;
  color: #fff;
}
`;
