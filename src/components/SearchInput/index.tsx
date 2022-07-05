import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

const SearchInput = () => {
  return (
    <SearchContainer>
      <MagnifyingGlass size={18} />
      <input type="text" placeholder="Search for a country…" />
    </SearchContainer>
  )
}

export default SearchInput
