import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
