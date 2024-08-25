import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  FooterProfile,
  HeaderProfile,
  InfoProfile,
  ProfileContainer,
} from './styles'
import { useEffect, useState } from 'react'

interface Transaction {
  html_url: string
  avatar_url: string
  name: string
  bio: string
  login: string
  followers: number
}

export function Profile() {
  const [issues, setIssues] = useState<Transaction | null>(null)

  async function loadIssues() {
    const response = await fetch('https://api.github.com/users/HenriqueSC23')
    const data = await response.json()

    setIssues(data)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <ProfileContainer>
      <img src={issues?.avatar_url} alt="" />

      <InfoProfile key={1}>
        <HeaderProfile>
          <h1>{issues?.name}</h1>
          <a href={issues?.html_url}>
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </HeaderProfile>
        <p>{issues?.bio}</p>
        <FooterProfile>
          <div>
            <GithubLogo weight="fill" size={18} />
            {issues?.login}
          </div>
          <div>
            <Buildings weight="fill" size={18} />
            Vou para Praia
          </div>
          <div>
            <Users weight="fill" size={18} />
            {issues?.followers} <p>seguidores</p>
          </div>
        </FooterProfile>
      </InfoProfile>
    </ProfileContainer>
  )
}
