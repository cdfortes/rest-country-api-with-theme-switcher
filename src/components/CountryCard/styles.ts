import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
`

export const FlagContainer = styled.div`
  > img {
    width: 100%;
    height: auto;
    cursor: pointer;
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
