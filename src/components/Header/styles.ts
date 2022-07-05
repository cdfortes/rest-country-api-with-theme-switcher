import styled from 'styled-components'

export const Container = styled.header`
  height: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  > a {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 800;
    text-decoration: none;
  }

  > button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    svg {
      width: 20px;
    }
  }
`
