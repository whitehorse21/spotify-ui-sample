import styled from "styled-components"

const ResponsiveMessage = ({ width }) => (
  <Container fs={width > 540 ? "var(--fs-24)" : "var(--fs-16)"}>
    <h1>This project is not responsive yet. Be sure to run the application on a device with a resolution greater than 1280px.</h1>
    <p>Current resolution: {width}px</p>
  </Container>
)

export default ResponsiveMessage

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
  width: 100vw;
  height: 100vh;
  padding: 2.8rem;
  background-color: var(--main-bg);
  text-align: center;

  h1, p {
    font-size: ${({ fs }) => fs};
  }
`