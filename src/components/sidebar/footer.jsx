import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { toggleExpandAlbum } from "../../store/structureSlice"

import MenuItem from "./menuItem";
import ExpandImageBtn from "../expandImageBtn";
import styled from "styled-components"

const SidebarFooter = ({ expandAlbum, currentMusic }) => {
  const [height, setHeight] = useState(null)

  function updateHeight(el) {
    const elHeight = el.getBoundingClientRect().height
    setHeight(elHeight)
  }

  return (
    <Container style={{
      transform: `translateY(-${expandAlbum ? height : 0}px)`,
      transition: `transform .4s ${expandAlbum ? 'ease-in .4s' : 'ease-out 0s'}`
    }}>
      <ul>
        <MenuItem path="/install" label="Install App" icon="download" margin />
      </ul>

      <div className="image-container">
        <div className="wrapper">
          {expandAlbum ? <ExpandImageBtn arrowDown /> : false}
          <img
            className="image"
            alt={currentMusic.artist}
            src={currentMusic.albumImage}
            onLoad={event => updateHeight(event.target)} />
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  expandAlbum: state.structure.expandAlbum,
  currentMusic: state.player.currentMusic
})
const mapDispatchToProps = dispatch => bindActionCreators({ toggleExpandAlbum }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SidebarFooter)

const Container = styled.div`
  background-color: var(--sidebar-nav-bg);
  position: relative;
  padding: 0 0.8px;
  z-index: 4;

  .image-container {
    position: absolute;
    top: 100%;
    width: 100%;
  }

  .wrapper {
    position: relative;

    &:hover .expand-image {
      opacity: 1;
    }
  }

  .image {
    width: 100%;
    object-fit: contain;
    -webkit-user-drag: none;
  }
`