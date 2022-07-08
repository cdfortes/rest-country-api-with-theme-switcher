import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import {
  Container,
  Button,
  ButtonContainer,
  DetailsContainer
} from '../styles/layout'

// interface CountryDetailsProps {
//   name: {
//     common: string
//   }
//   nativeName: string
//   population: number
//   region: string
//   subRewion: string
//   capital: string
//   topLevelDomain: string[]
//   currencies: {
//     code: string
//     name: string
//     symbol: string
//   }[]
//   languages: {
//     iso639_1: string
//     iso639_2: string
//     name: string
//     nativeName: string
//   }[]
//   borderCountries: string[]
//   flags: {
//     png: string
//   }
// }

const CountryDetails = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button to="/">
          <ArrowLeft />
          Back
        </Button>
      </ButtonContainer>
      <DetailsContainer>
        <img src="https://flagcdn.com/mk.svg" alt="US" />
        <div>
          <h1>United States</h1>
          <p>
            <strong>Population: </strong>
            <span> </span>
          </p>
          <p>
            <strong>Region: </strong>
            <span> </span>
          </p>
          <p>
            <strong>Capital: </strong>
            <span> </span>
          </p>
        </div>
      </DetailsContainer>
    </Container>
  )
}

export default CountryDetails
