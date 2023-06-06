import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { newPlaylist } from "../../store/spotifySlice"

import MenuItem from "./menuItem"
import Div from "../div"

const Menu = ({ newPlaylist }) => (
  <div>
    <Div px="0.8rem">
      <ul>
        <MenuItem path="/" label="Home" icon="home" />
        <MenuItem path="/search" label="Search" icon="search" />
        <MenuItem path="/library" label="Your Library" icon="library" />
      </ul>
    </Div>
    <Div mt="2.4rem" />
    <ul>
      <MenuItem
        button
        padding
        icon="plus"
        bg="var(--white)"
        label="Create Playlist"
        action={() => newPlaylist()} />
      <MenuItem
        padding
        icon="heart-bg"
        path="/liked-songs"
        label="Liked Songs" />
    </ul>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({ newPlaylist }, dispatch)
export default connect(null, mapDispatchToProps)(Menu)