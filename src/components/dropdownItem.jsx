import styled from "styled-components"
import Icons from "./icons"

const DropdownItem = ({ name, icon = false, action, separator = false }) => (
  <Container separator={separator}>
    <button onClick={action ? action : () => false}>
      <span>{name}</span>
      {icon ? <Icons icon={icon} /> : false}
    </button>
  </Container>
)

export default DropdownItem

const Container = styled.li`
   button {
    display: flex;
    position: relative;
    justify-content: space-between;
    font-size: var(--fs-14);
    line-height: var(--lh-16);
    font-family: "Spotify Circular Book", sans-serif;
    color: var(--white-op-09);
    padding: 1.2rem 0.8rem 1.2rem 1.2rem;
    width: 100%;
    border-radius: 2px;

    &:hover {
      background-color: var(--white-op-01);
    }

    ${props => props.separator ? `
      &::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        border-top: 1px solid var(--white-op-01);
      }
    `: ""}
  }
`