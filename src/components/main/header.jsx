import { useEffect } from "react"
import { useRef } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Icons from "../icons"
import UserButton from "./userButton"

const Header = ({ header }) => {
  const headerRef = useRef(null)

  const backgroundStyles = {
    background: header.background || "rgb(83, 83, 83)",
    opacity: header.opacity
  }

  useEffect(() => {
    window.spotifyHeaderEl = headerRef.current
  }, [])

  return (
    <Container ref={headerRef} style={{ left: `${header.left}px` }}>
      <div className="background" style={backgroundStyles}></div>

      <nav className="nav-container">
        <button className="btn left" disabled>
          <Icons icon="arrow-large" />
        </button>
        <button className="btn right" disabled>
          <Icons icon="arrow-large" />
        </button>
      </nav>

      <UserButton />
    </Container>
  )
}

const mapStateToProps = state => ({ header: state.structure.header })
export default connect(mapStateToProps)(Header)

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1.6rem 3.2rem;
  z-index: 10;

  .background {
    position: absolute;
    inset: 0;
    transition: background-color 0.8s ease;
    z-index: -2;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(hsl(0deg 0% 8% / .75), hsl(0deg 0% 8% / .75));
      z-index: -1;
    }
  }

  .nav-container {
    display: flex;
    gap: 1.6rem;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      color: var(--white);
      background-color: var(--black-op-07);
      border-radius: 50%;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &.left {
        transform: rotate(-180deg)
      }

      & > svg {
        width: 22px;
        height: 22px;
        opacity: 0.9;
      }
    }
  }
`