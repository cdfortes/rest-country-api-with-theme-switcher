import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0 ;
      box-sizing: border-box ;
    }
    html{
      font-family: 'Nunito Sans', sans-serif;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body{
      background-color: ${(props) => props.theme.colors.background};
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.text} ;
    }

    input, select, button{
      font-family: 'Nunito Sans', sans-serif;

    }

`
