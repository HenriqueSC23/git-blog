import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  FooterProfile,
  HeaderProfile,
  InfoProfile,
  ProfileContainer,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/HenriqueSC23.png" alt="" />
      <InfoProfile>
        <HeaderProfile>
          <h1>Henrique</h1>
          <a href="#">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </HeaderProfile>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          voluptates nemo. Beatae quam odit aliquam accusamus minima asperiores
          facere, quidem libero veniam molestiae ad quae, dignissimos in labore
          architecto officiis?
        </p>
        <FooterProfile>
          <div>
            <GithubLogo weight="fill" size={18} />
            HenriqueSC23{' '}
          </div>
          <div>
            <Buildings weight="fill" size={18} />
            Vou para Praia
          </div>
          <div>
            <Users weight="fill" size={18} />
            10 seguidores
          </div>
        </FooterProfile>
      </InfoProfile>
    </ProfileContainer>
  )
}
