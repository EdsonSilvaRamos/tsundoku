import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{
    background-color: #000;
}

body { 
    height: 100vh;
    width: 100%;
}

*, button, input{
    border: 0;
    outline: 0;    
}

button{
    cursor: pointer;
    font-size: 0;
}

body, button {
    //font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   
    font-family: Roboto, sans-serif; 
}
`;

export default GlobalStyle;