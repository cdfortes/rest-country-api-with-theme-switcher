import { CardContainer, FlagContainer, InfoContainer } from './styles'

const CountryCard = () => {
  return (
    <CardContainer>
      <FlagContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"
          alt="Brazil"
        />
      </FlagContainer>

      <InfoContainer>
        <h1>Brazil</h1>
        <p>
          <strong>Population: </strong>
          <span>200.000.000</span>
        </p>
        <p>
          <strong>Region: </strong>
          <span>South America</span>
        </p>
        <p>
          <strong>Capital: </strong>
          <span>Brasilia</span>
        </p>
      </InfoContainer>
    </CardContainer>
  )
}

export default CountryCard
