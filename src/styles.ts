import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        outline: none;
        border: none;
        box-sizing: border-box;
        display: block;
        padding: 0;
        margin: 0; 
        font-family: 'Inter', sans-serif;
    }
    
    h1, p, span{
        padding: 0;
        margin: 0;
    }

    :root {
        --white: #f8f7f9;
        --pink: #ddaecb;
        --purple-01: #b3a7e1;
        --purple-02: #9d73c3;
        --purple-03: #5f30e2;
        --purple-04: #4521a9;
        --purple-05: #2e2e52;
        --blue: #200ac3;
        --gray: #9696ae;
        --color-icon: #8687A8;
        --color-border: #dfdfe87a;
        --border-header: #dfdfe8;
    }
`;

export default GlobalStyle;
