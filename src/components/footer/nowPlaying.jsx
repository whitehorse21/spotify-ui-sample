import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { toggleLiked } from "../../store/playerSlice";

import ExpandImageBtn from "../expandImageBtn";
import Div from "../div";
import Icons from "../icons"
import styled from "styled-components"
import { grow, shake } from "../../assets/styles/keyframes"

const NowPlaying = ({ currentMusic, toggleLiked, expandAlbum }) => {
  const [animation, setAnimation] = useState("")
  const [right, setRight] = useState(0)

  function updateRight(el) {
    const elRight = el.getBoundingClientRect().right
    setRight(elRight)
  }

  useEffect(() => {
    if (currentMusic.liked || animation !== "") {
      setAnimation(currentMusic.liked ? "liked" : "shake")
    }
  }, [currentMusic.liked, animation])

  return (
    <Container style={{
      transform: `translateX(-${expandAlbum ? right : 0}px)`,
      transition: `transform .4s ${expandAlbum ? 'ease-out 0s' : 'ease-in .4s'}`
    }}>
      <div className="image-container">
        {!expandAlbum ? <ExpandImageBtn /> : false}
        <img
          className="image"
          alt={currentMusic.artist}
          src={currentMusic.albumImage}
          onLoad={event => updateRight(event.target)} />
      </div>

      <Div flex column mx="1.4rem" overflow="hidden">
        <a href="/" className="music-name" onClick={e => e.preventDefault()}>
          {currentMusic.name}
        </a>
        <a href="/" className="music-artist" onClick={e => e.preventDefault()}>
          {currentMusic.artist}
        </a>
      </Div>

      <Div flex align="center" justify="center" ml="0.6rem">
        <button
          className={`btn ${animation}`}
          onClick={() => toggleLiked()}>
          <Icons icon={currentMusic.liked ? "heart-green" : "heart"} />
        </button>
        <button className="btn">
          <Icons icon="popup" />
        </button>
      </Div>
    </Container >
  )
}

const mapStateToProps = state => ({
  expandAlbum: state.structure.expandAlbum,
  currentMusic: state.player.currentMusic
})
const mapDispatchToProps = dispatch => bindActionCreators({ toggleLiked }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 18rem;

  .image-container {
    position: relative;
    width: 5.6rem;
    height: 5.6rem;

    &:hover .expand-image {
      opacity: 1;
    }
  }

  .image {
    width: 100%;
    object-fit: contain;
    -webkit-user-drag: none;
  }
    
  .music-name {
    font-size: var(--fs-14);
  }
  
  .music-artist {
    font-size: var(--fs-11);
    color: var(--gray);
  }

  .music-name,
  .music-artist {
    font-family: "Spotify Circular Book", sans-serif;
    line-height: var(--lh-16);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & :is(.music-name, .music-artist):hover {
    text-decoration: underline;
    color: var(--white);
  }

  .btn {
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    z-index: 10;
    opacity: 0.7;
    color: var(--white);
    
    &.liked {
      color: var(--green);
    }

    &.liked::before {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--green);
      animation: ${grow} 0.4s linear forwards;
      z-index: 9;
    }

    &:is(.liked, :hover) {
      opacity: 1;
    }

    &.shake {
      animation: ${shake} 0.4s linear;
    }
  }
`