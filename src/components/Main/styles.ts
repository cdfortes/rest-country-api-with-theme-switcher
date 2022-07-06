import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 4.8rem 8rem;
  flex: 1;

  @media (max-width: 480px) {
    padding: 2.4rem 1rem;
  }
`

export const FilterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
  margin-bottom: 4.8rem;
`

export const CountriesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.4rem, 1fr));
  gap: 7.5rem;
  width: 100%;
`
