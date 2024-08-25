import { CardPost } from './components/cardPost'
import { Profile } from './components/profile'
import { SearchBar } from './components/searchBar'
import { GridPosts, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchBar />
      <GridPosts>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </GridPosts>
    </HomeContainer>
  )
}
