import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  :hover {
    background-color: ${(props) => props.theme.colors.background};
    cursor: pointer;
    img {
      transform: scale(1.1);
      object-fit: cover;
    }
  }
`

export const FlagContainer = styled.div`
  overflow: hidden;
  > img {
    width: 100%;
    height: 18rem;
    cursor: pointer;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  padding: 2.4rem;

  > h1 {
    margin-bottom: 1.6rem;
  }

  > p {
    padding-bottom: 0.8rem;
  }
`
