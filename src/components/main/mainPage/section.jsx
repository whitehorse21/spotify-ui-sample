import Div from "../../div"
import styled from "styled-components"

const Section = props => (
  <Container>
    <Div flex justify="space-between" sizeY="3.3rem" mb="1.6rem">
      <h2 className="title">
        <a href={props.path || "/"} onClick={e => e.preventDefault()}>{props.title}</a>
      </h2>
      <div className="more">
        <a href={props.path || "/"} onClick={e => e.preventDefault()}>See All</a>
      </div>
    </Div>

    <div className="cards">
      {props.children}
    </div>
  </Container>
)

export default Section

const Container = styled.section`
  margin-bottom: 1.6rem;
  min-height: 30rem;

  .title {
    font-size: var(--fs-24);
    line-height: var(--lh-28);
    letter-spacing: -0.04em;
    margin-top: 3px;

    a:hover {
      text-decoration: underline;
    }
  }

  .more {
    display: none;

    a {
      align-self: flex-end;
      justify-self: flex-end;
      display: inline-block;
      padding: 3px 0;
      color: var(--gray);
      font-size: var(--fs-12);
      line-height: var(--lh-16);
      letter-spacing: 1.2px;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 18.15rem);
    grid-auto-rows: 1fr;
    gap: 2.4rem;
  }

  @media (max-width: 1480px) {
    .cards {
      grid-template-columns: repeat(5, 19.4rem);
    }

    .more {
      display: flex;
    }
  }

  @media (max-width: 1340px) {
    .cards {
      grid-template-columns: repeat(5, 18.6rem);
    }
  }
`