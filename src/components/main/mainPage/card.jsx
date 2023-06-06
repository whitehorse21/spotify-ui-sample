import styled from "styled-components"
import Icons from "../../icons"

const Card = props => (
  <Container>
    <a href={props.path || "/"} onClick={event => event.preventDefault()}>
      <div className="image-container">
        <div className={props.artist ? "artist" : ""}>
          {props.image ? (
            <img className="image" src={props.image} alt={props.name} />
          ) : (
            <div className="default-image">
              <Icons icon="ottava" />
            </div>
          )}
          {props.player ? (
            <div className="playlist-btn-container">
              <button className="playlist-btn">
                <Icons icon="playlist" />
              </button>
            </div>
          ) : false}
        </div>
      </div>
      <div className="content-info">
        <p className="name">{props.name}</p>
        {props.artist || props.description ? (
          <p className="description">{props.artist ? "Artist" : props.description}</p>
        ) : false}
      </div>
    </a>
  </Container>
)

export default Card

const Container = styled.article`
  display: flex;
  background-color: var(--black3);
  border-radius: 4px;
  overflow: hidden;
  transition: background-color .3s ease;
  
  > a {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 1.6rem;
  }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 1.3rem;
    border-radius: 4px;

    > div {
      height: 100%;
      box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

      &.artist {
        overflow: hidden;
        border-radius: 50%;
      }
    }
    
    .image {
      width: 100%;
      -webkit-user-drag: none;
    }
  }

  .default-image {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    color: var(--gray2);
    background-color: var(--gray3);

    &.artist {
      overflow: hidden;
      border-radius: 50%;
    }
  }

  .playlist-btn-container {
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
  }
    
  .playlist-btn {
    transform: translateY(8px);
    color: var(--black);
    opacity: 0;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .content-info {
    min-height: 6.5rem;
  }

  .name {
    font-size: var(--fs-16);
    line-height: var(--lh-24);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .description {
    margin-top: 4px;
    color: var(--gray);
    font-size: var(--fs-14);
    line-height: var(--lh-16);
    font-family: "Spotify Circular Book";
    text-overflow: ellipsis;
    display: -webkit-box;
    // Limita o numero de linhas do container
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    background-color: var(--gray3);

    .playlist-btn {
      opacity: 1;
      transform: translateY(0);
    }
  }
`