import { useEffect, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { scaleHeaderBgOpacity } from "../../store/structureSlice"

import Header from "../../components/main/header"
import MainPage from "../../components/main/mainPage"
import PlaylistPage from "../../components/main/playlistPage"
import { Container } from "./style"

const Main = ({ scaleHeaderBgOpacity, playlists }) => {
  const scroll = useCallback(() => {
    const { spotifyHeaderEl, spotifyFirstTriggerEl, spotifySecondTriggerEl } = window

    const headerBottom = spotifyHeaderEl?.getBoundingClientRect().bottom
    const firstTriggerTop = Number(spotifyFirstTriggerEl?.getBoundingClientRect().top)
    const secondTriggerTop = spotifySecondTriggerEl?.getBoundingClientRect().top

    if (headerBottom && firstTriggerTop && secondTriggerTop) {
      scaleHeaderBgOpacity({ headerBottom, firstTriggerTop, secondTriggerTop })
    }
  }, [scaleHeaderBgOpacity])

  useEffect(scroll, [scroll])

  return (
    <Container onScroll={scroll}>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />

        <Route path="/playlist">
          {playlists.map((playlist, index) => <Route
            key={playlist.id}
            path={`${playlist.id}`}
            element={<PlaylistPage playlist={{ ...playlist, index }} />} />
          )}
        </Route>
      </Routes>
    </Container>
  )
}

const mapStateToProps = state => ({
  headerBackground: state.structure.header.background,
  playlists: state.spotify.playlists
})
const mapDispatchToProps = dispatch => bindActionCreators({ scaleHeaderBgOpacity }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Main)