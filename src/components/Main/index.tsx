import SearchInput from '../SearchInput'
import SelectFilter from '../SelectFilter'
import { Container, FilterWrapper } from './styles'

const Main = () => {
  return (
    <Container>
      <FilterWrapper>
        <SearchInput />
        <SelectFilter />
      </FilterWrapper>
    </Container>
  )
}

export default Main
