import styled from 'styled-components'

export const Container = styled.header`
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  @media (max-width: 480px) {
    padding: 0 1.6rem;
  }

  > a {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.4rem;
    font-weight: 800;
    text-decoration: none;
    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  > button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    svg {
      width: 20px;
    }

    @media (max-width: 800px) {
      font-size: 1.2rem;
    }
  }
`
