import {
  PublicationsNumber,
  SearchContainer,
  SearchHeader,
  SearchTitle,
  SearchInput,
} from './styles'

export function SearchBar() {
  return (
    <SearchContainer>
      <SearchHeader>
        <SearchTitle>Publicações</SearchTitle>
        <PublicationsNumber>6 publicações</PublicationsNumber>
      </SearchHeader>

      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
