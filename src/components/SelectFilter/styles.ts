import styled from 'styled-components'

export const SelectWrapper = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1.124rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  outline: transparent;
  border: none;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    color: ${(props) => props.theme.colors.text};
  }

  option {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`
