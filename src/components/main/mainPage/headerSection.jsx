import { useEffect, useRef } from "react"
import Div from "../../div"
import styled from "styled-components"

const HeaderSection = props => {
  function getGreeting() {
    const hourNow = new Date().getHours()

    if (hourNow >= 5 && hourNow < 12) {
      return "Good morning"
    } else if (hourNow >= 12 && hourNow < 18) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }

  const secondTriggerRef = useRef(null)
  useEffect(() => { window.spotifySecondTriggerEl = secondTriggerRef.current }, [])

  return (
    <Container>
      <Div flex align="center" mb="1.8rem" sizeY="4.2rem">
        <h2 className="title">{getGreeting()}</h2>
      </Div>
      <div className="cards" ref={secondTriggerRef}>
        {props.children}
      </div>
    </Container>
  )
}

export default HeaderSection

const Container = styled.section`
  margin-bottom: 1.6rem;

  .title {
    color: var(--white);
    font-size: var(--fs-32);
    line-height: var(--lh-36);
    letter-spacing: -0.04em;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem 2.4rem;
  }

  @media (max-width: 1200px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: var(--fs-24);
      line-height: var(--lh-28);
    }

    .cards {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
  }
`