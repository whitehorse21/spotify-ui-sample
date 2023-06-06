import { useEffect, useRef } from "react"
import { connect } from "react-redux/es/exports"
import { bindActionCreators } from "@reduxjs/toolkit"
import { setPlaylistBackground } from "../../../store/spotifySlice"

import Icons from "../../icons"
import styled from "styled-components"

const PlaylistHeader = ({ playlist, focusName, focusImage, focusDescription, setPlaylistBackground }) => {
  const nameLength = playlist.name.length
  const titleSize = nameLength < 20 ? "var(--fs-96)" : nameLength < 26 ? "7.2rem" : "4.8rem"
  const titleLetterSpacing = nameLength < 20 ? "-5px" : nameLength < 26 ? "-4px" : "-2.4px"
  const titlePadding = nameLength < 20 ? "7px" : nameLength < 26 ? "5px" : "3.7px"

  const style = {
    "--playlist-title-size": titleSize,
    "--title-letter-spacing": titleLetterSpacing,
    "--title-padding": titlePadding,
    backgroundColor: playlist.background || "rgb(83, 83, 83)"
  }

  function getPrimaryColor({ target: imageEl }) {
    if (playlist.background !== "") return

    const colorThief = window.colorThief
    const colorValues = colorThief.getColor(imageEl)
    setPlaylistBackground({ index: playlist.index, colorValues })
  }

  const firstTriggerRef = useRef(null)
  useEffect(() => { window.spotifyFirstTriggerEl = firstTriggerRef.current }, [])

  return (
    <Container style={style}>
      <div className="image-container" onClick={focusImage}>
        {playlist.imageUrl ? (
          <img
            alt="Playlist"
            crossOrigin="Anonymous"
            src={playlist.imageUrl}
            onLoad={getPrimaryColor} />
        ) : (
          <div className="default-image">
            <Icons icon="ottava" />
          </div>
        )}
        <div
          className="choose-photo"
          style={{ backgroundColor: playlist.imageUrl ? "var(--black-op-07)" : "var(--gray3)" }}>
          <div>
            <Icons icon="pen" />
            <span>Choose photo</span>
          </div>
        </div>
      </div>
      <div className="info-container">
        <h2>Playlist</h2>
        <div>
          <button
            className="playlist-name-btn"
            onClick={focusName}>
            <h1 ref={firstTriggerRef}>{playlist.name}</h1>
          </button>
        </div>
        {playlist.description ? (
          <div>
            <button
              className="playlist-description-btn"
              onClick={focusDescription}>
              <p className="description">{playlist.description}</p>
            </button>
          </div>
        ) : false}
        <div>
          <a className="user" href="/" onClick={e => e.preventDefault()}>ruuuff</a>
        </div>
      </div>
    </Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ setPlaylistBackground }, dispatch)
export default connect(null, mapDispatchToProps)(PlaylistHeader)

const Container = styled.header`
  display: flex;
  position: relative;
  padding: 8.4rem 3.2rem 2.4rem;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 0, rgba(0, 0 ,0, .5) 100%);
    z-index: -1;
  }

  .image-container {
    width: 23.2rem;
    height: 23.2rem;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    margin-right: 2.4rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      -webkit-user-drag: none;
    }

    .default-image {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: var(--gray2);
      background-color: var(--gray3);
      color: #7f7f7f;

      & > * {
        width: 6.4rem;
        transform: translateY(-4px);
      }
    }

    .choose-photo {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray3);
      color: var(--white);
      opacity: 0;

      > div {
        transform: translateY(8px);
        text-align: center;
      }
      
      span {
        display: block;
        margin-top: 1px;
        font-size: var(--fs-16);
        line-height: var(--lh-24);
        font-family: "Spotify Circular Book", sans-serif;
        user-select: none;
      }
    }

    &:hover .choose-photo {
      opacity: 1;
    }
  }

  .info-container {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    & > h2 {
      font-size: var(--fs-12);
      line-height: var(--lh-16);
      color: var(--white);
      text-transform: uppercase;
    }
    
    .playlist-name-btn {
      cursor: pointer;
      width: 100%;

      h1 {
        font-family: "Spotify Circular Bold", sans-serif;
        font-weight: 900;
        text-align: left;
        font-size: var(--playlist-title-size);
        line-height: var(--playlist-title-size);
        letter-spacing: var(--title-letter-spacing);
        color: var(--white);
        user-select: none;
        word-break: break-all;
        padding: var(--title-padding) var(--title-padding) var(--title-padding) 0;
      }
    }

    .playlist-description-btn {
      margin-top: 0.8rem;
      cursor: pointer;
      width: 100%;
    }

    .description {
      font-size: var(--fs-16);
      line-height: var(--lh-24);
      color: var(--white-op-07);
      word-break: break-all;
      text-align: left;
      font-family: "Spotify Circular Book", sans-serif;
    }

    .user {
      display: inline-block;
      margin-top: 0.8rem;
      line-height: var(--lh-16);
      font-size: var(--fs-14);
      user-select: none;
      transform: translateY(2px);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`