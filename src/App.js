import { useState, useEffect } from "react"
import { HashRouter } from "react-router-dom"

import Sidebar from "./layout/sidebar"
import Main from "./layout/main"
import Footer from "./layout/footer"
import ResponsiveMessage from "./components/responsiveMessage"
import styled from "styled-components"

const App = props => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
    <HashRouter>
      {width > 1280 ? (
        <Container>
          <Sidebar />
          <Main />
          <Footer />
        </Container>
      ) : <ResponsiveMessage width={width} />}
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
`