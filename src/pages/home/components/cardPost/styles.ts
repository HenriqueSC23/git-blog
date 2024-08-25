import styled from 'styled-components'

export const CardPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  max-width: 416px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;

    display: -webkit-box;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 4; /* Para suporte adicional em navegadores */
    line-height: 1.5em; /* Ajuste conforme necessário */
    max-height: calc(1.5em * 4);
  }
`

export const CardPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    margin-top: 4px;
    color: ${(props) => props.theme['base-span']};
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    min-width: 60px;
  }
`
