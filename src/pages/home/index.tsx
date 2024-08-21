import { Profile } from './components/profile'
import { SearchBar } from './components/searchBar'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchBar />
    </HomeContainer>
  )
}
