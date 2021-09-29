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
    body{
        background-color: #141414;
        margin: 0;
    }
    img{ 
        image-rendering: -webkit-optimize-contrast;
    }

`;

export default GlobalStyle;