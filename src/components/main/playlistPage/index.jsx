import { useRef, useState, useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { setBackground } from "../../../store/structureSlice"
import { selectTab, updatePlaylist, deletePlaylist } from "../../../store/spotifySlice"

import PlaylistHeader from "../playlistPage/playlistHeader"
import PlaylistContent from "../playlistPage/playlistContent"
import PlaylistModal from "../playlistPage/playlistModal"
import styled from "styled-components"

const PlaylistPage = ({ playlist, updatePlaylist, deletePlaylist, selectTab, setBackground }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const nameRef = useRef(null)
  const imageRef = useRef(null)
  const descriptionRef = useRef(null)

  function toggleModal(element) {
    setModalVisible(!modalVisible)
    if (element) setTimeout(() => element.select(), 10)
  }

  function savePlaylist(newPlaylist = {}) {
    toggleModal()
    updatePlaylist({ newPlaylist, index: playlist.index })
  }

  useEffect(() => {
    setBackground(playlist.background)
    selectTab(playlist.id)
  }, [playlist.name, playlist.id, playlist.background, setBackground, selectTab])

  return (
    <Container>
      <PlaylistHeader
        playlist={playlist}
        focusImage={() => toggleModal(imageRef.current)}
        focusName={() => toggleModal(nameRef.current)}
        focusDescription={() => toggleModal(descriptionRef.current)} />

      <PlaylistContent
        toggleModal={toggleModal}
        playlistBackground={playlist.background}
        deletePlaylist={() => deletePlaylist(playlist.index)} />

      <PlaylistModal
        playlist={playlist}
        savePlaylist={savePlaylist}
        modal={{ modalVisible, toggleModal }}
        inputReferences={{ nameRef, imageRef, descriptionRef }} />
    </Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setBackground,
  updatePlaylist,
  deletePlaylist,
  selectTab,
}, dispatch)
export default connect(null, mapDispatchToProps)(PlaylistPage)

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;
  min-height: calc(((100vh - 64px) - 90px) - 519px);
  overflow-y: auto;
  overflow-x: hidden;
`