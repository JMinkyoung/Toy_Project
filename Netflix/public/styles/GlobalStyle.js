import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    ul {
        list-style: none;
        float: left;
    }

`;

export default GlobalStyle;