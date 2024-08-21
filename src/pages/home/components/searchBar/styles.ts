import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin: auto;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchTitle = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => props.theme['base-subtitle']};
`

export const PublicationsNumber = styled.span`
  font-size: 14px;
  line-height: 1.6;
  color: ${(props) => props.theme['base-span']};
`
export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
