import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 4.8rem 8rem;
  text-align: left;
  flex: 1;

  @media (max-width: 480px) {
    padding: 2.4rem 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const Button = styled(Link)`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.text};
  border-radius: 6px;
  padding: 1rem 3.2rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const DetailsContainer = styled.section`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  gap: 12rem;

  > img {
    width: auto;
    height: 40.1rem;
    object-fit: cover;
  }

  h1 {
    font-size: 3.2rem;
    margin-bottom: 2.3rem;
    margin-top: 4rem;
  }
`
