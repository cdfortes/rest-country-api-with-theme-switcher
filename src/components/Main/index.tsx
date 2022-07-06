//import { useEffect, useState } from 'react'
//import { api } from '../../services/api'
import CountryCard from '../CountryCard'
import SearchInput from '../SearchInput'
import SelectFilter from '../SelectFilter'
import { Container, CountriesGrid, FilterWrapper } from './styles'

const Main = () => {
  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   api.get('/').then((response) => console.log(response.data))
  // }, [])
  return (
    <Container>
      <FilterWrapper>
        <SearchInput />
        <SelectFilter />
      </FilterWrapper>
      <CountriesGrid>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </CountriesGrid>
    </Container>
  )
}

export default Main
