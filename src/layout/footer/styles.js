import styled from "styled-components"

export const Container = styled.footer`
  grid-column: 1 / span 2;
  grid-row: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 1.2rem;
  background-color: #181818;
  padding: 0 1.6rem;
  border-top: 1px solid #282828;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 0.8rem 1.2rem;
  }
`