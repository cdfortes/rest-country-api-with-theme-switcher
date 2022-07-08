import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import CountryCard from '../CountryCard'
import SearchInput from '../SearchInput'
import SelectFilter from '../SelectFilter'
import { Container, CountriesGrid, FilterWrapper } from './styles'

interface Country {
  name: {
    common: string
  }
  alpha3Code: string
  callingCodes: string[]
  population: number
  region: string
  capital: string
  flags: {
    svg: string
  }
}

const Main = () => {
  const [countries, setCountries] = useState<Array<Country>>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await api
        .get('/all')
        .then((response) => setCountries(response.data))
      return data
    }
    fetchData().catch(console.error)
  }, [])
  return (
    <Container>
      <FilterWrapper>
        <SearchInput />
        <SelectFilter />
      </FilterWrapper>
      <CountriesGrid>
        {countries &&
          countries.map((country, index) => (
            <CountryCard key={country.name.common + index} country={country} />
          ))}
      </CountriesGrid>
    </Container>
  )
}

export default Main
