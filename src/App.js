import { HashRouter } from "react-router-dom"

import Sidebar from "./layout/sidebar"
import Main from "./layout/main"
import Footer from "./layout/footer"
import styled from "styled-components"

const App = props => {
  return (
    <HashRouter>
      <Container>
        <Sidebar />
        <Main />
        <Footer />
      </Container>
    </HashRouter>
  )
}

export default App;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 23.6rem auto;
  grid-template-rows: auto 9.1rem;
  height: 100vh;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-rows: auto 13rem;
  }
`