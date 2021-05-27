import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Details = styled.div`
  max-height: 750px;
  width: 350px;
  background-color: #1a5653;
  justify-self: center;
  display: inline-grid;
  margin-bottom: 100px;
`

export const ButtonAddList = styled.button`
  margin-bottom: 25px;
`

export const MyList = styled.div`
  width: 350px;
  background-color: #1a5653;
  justify-self: center;
  margin-bottom: 100px;
`
