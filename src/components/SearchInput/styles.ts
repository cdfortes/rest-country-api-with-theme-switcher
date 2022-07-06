import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1.6rem 3.2rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 48rem;

  &:focus-within {
    outline: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }

  > svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  > input {
    flex: 1;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secundary};

    &:focus {
      outline: transparent;
      box-shadow: none;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`
