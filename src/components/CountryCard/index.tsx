import { CardContainer, FlagContainer, InfoContainer } from './styles'

interface Country {
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
  flags: {
    svg: string
  }
}

interface CountryCardProps {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, population, region, capital, flags } = country
  const link = name.common.toLowerCase().replace(/ /g, '-')
  return (
    <CardContainer to={link}>
      <FlagContainer>
        <img src={flags.svg} alt={name.common} />
      </FlagContainer>

      <InfoContainer>
        <h1>{name.common}</h1>
        <p>
          <strong>Population: </strong>
          <span>
            {population.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </p>
        <p>
          <strong>Region: </strong>
          <span>{region}</span>
        </p>
        <p>
          <strong>Capital: </strong>
          <span>{capital}</span>
        </p>
      </InfoContainer>
    </CardContainer>
  )
}

export default CountryCard
