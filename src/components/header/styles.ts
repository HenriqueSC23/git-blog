import styled from 'styled-components'
import headerCover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 8.375rem;
  justify-content: center;
  height: 296px;
  width: 100%;
  background-image: url(${headerCover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
