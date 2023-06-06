import styled from "styled-components"

const Dropdown = ({ active, children, top, bottom, right, left, space, minWidth }) => (
  <Container
    active={active}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    space={space}
    minWidth={minWidth}>
    <ul>
      {children}
    </ul>
  </Container>
)

export default Dropdown

const Container = styled.div`
  position: absolute;
  top: ${props => props.bottom ? `calc(100% + ${props.space || "0.8rem"})` : "auto"};
  right: ${props => props.right ? "0" : "auto"};
  bottom: ${props => props.top ? `calc(100% + ${props.space || "0.8rem"})` : "auto"};
  left: ${props => props.left ? "0" : "auto"};
  padding: 4px;
  min-width: ${props => props.minWidth || "19.6rem"};
  border-radius: 2px;
  background-color: var(--gray3);
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  opacity: ${props => props.active ? 1 : 0};
  visibility: ${props => props.active ? "visible" : "hidden"};
  z-index: 1000;
`