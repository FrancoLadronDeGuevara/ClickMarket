
import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  /* body {
     color: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     height: 100vh;
  } */
`;

export default GlobalStyles;
