import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0 ;
      box-sizing: border-box ;
    }
    body{
      background-color: ${(props) => props.theme.colors.background};
      font-size: 14px ;
      font-family: 'Nunito Sans', sans-serif;
      color: ${(props) => props.theme.colors.text} ;
    }


`
