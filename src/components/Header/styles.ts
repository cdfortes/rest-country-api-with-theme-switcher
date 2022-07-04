import styled from 'styled-components'

export const Container = styled.div`
  height: 3.75rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.875rem;

  > a {
    color: ${(props) => props.theme.colors.text};
  }

  > button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    svg {
      width: 24px;
    }
  }
`
