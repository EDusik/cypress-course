import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1333px;
    margin: 0 auto;
    padding: 20px 0 20px 0px;
  }

  button {
    cursor: pointer;
  }
`;
