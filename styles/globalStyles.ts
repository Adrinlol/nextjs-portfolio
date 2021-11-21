import { createGlobalStyle } from "styled-components";
import { devices } from "helpers/displayDevice";

export const GlobalStyle = createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;      
      font-family: 'Inter Regular', Roboto, Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }

    html {
        scroll-behavior: smooth;

    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      text-align: initial;
      outline: none;
      font-size: 1.125rem;
    }

    button {
      padding: 0;
      line-height: inherit;
      color: inherit;
      cursor: pointer;
    }

    input,
    textarea {
      border: 0;
      outline: none;
      width: 100%;  
      padding: 1rem 1.25rem;
    }

    h2, h3, h4, h5 {
      line-height: 35px;
    }

    h1 {
      font-weight: 600;
      letter-spacing: 0.025rem;
      margin-bottom: 1rem;
      font-size: 2rem;

      @media ${devices.tabletL} {
        font-size: 1.75rem;
      }

      @media ${devices.mobileL} {
        font-size: 1.25rem;
      }
    }

    input, textarea {
      border-radius: 0.25rem;
      padding: 2rem 0 2rem 1rem;
      width: 100%;
      font-family: inherit;
      font-size: 1.125rem;

      @media ${devices.mobileL} {
        padding: 2rem 0 2rem 0.5rem;
      }
    }

    h2, h3 {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.5rem;      

      @media ${devices.mobileL} {
        font-size: 1.25rem;      
      }
    }

    h4 {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.25rem;      
    }

    p, li {
      line-height: 28px;
    }

    p, span,  button {
      font-weight: 400;
      font-size: 1.125rem;
    }

    ul, h2 {
      list-style: none;
      margin: 0;
      padding: 0;
    }
`;
