import { HeaderContainer } from './styles'
import imageLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imageLogo} alt="" />
    </HeaderContainer>
  )
}
