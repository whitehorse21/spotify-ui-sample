import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  playlists: JSON.parse(localStorage.getItem("playlists")) || [],
  tabs: { activeTab: 'Home' }
}

function getUniqueId(idList, length = 6) {
  function getRandomId() {
    let randomId = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let index = 1; index <= length; index++) {
      randomId += characters[Math.floor(Math.random() * characters.length)]
    }

    return randomId
  }

  let uniqueId = getRandomId()
  while (idList.includes(uniqueId)) { uniqueId = getRandomId() }
  return uniqueId
}

export const spotifySlice = createSlice({
  name: "spotify",
  initialState: INITIAL_STATE,

  reducers: {
    selectTab: (state, action) => {
      state.tabs.activeTab = action.payload
    },

    newPlaylist: state => {
      const idList = state.playlists.map(playlist => playlist.id)
      const id = getUniqueId(idList)

      const playlist = {
        id,
        imageUrl: "",
        description: "",
        background: "",
        name: `My Playlist #${state.playlists.length + 1}`,
      }

      state.playlists.push(playlist)
      window.location.hash = `#/playlist/${id}`
      localStorage.setItem("playlists", JSON.stringify(state.playlists))
    },

    updatePlaylist: (state, action) => {
      const { newPlaylist, index } = action.payload
      const prevPlaylist = state.playlists[index]
      const background = prevPlaylist.imageUrl !== newPlaylist.imageUrl ? "" : prevPlaylist.background

      if (newPlaylist.name !== "") {
        state.playlists[index] = { ...prevPlaylist, background, ...newPlaylist }
        localStorage.setItem("playlists", JSON.stringify(state.playlists))
      }
    },

    deletePlaylist: (state, action) => {
      window.location.hash = "#/"
      state.tabs.activeTab = "Home"
      state.playlists.splice(action.payload, 1)
      localStorage.setItem("playlists", JSON.stringify(state.playlists))
    },

    setPlaylistBackground: (state, action) => {
      const { index, colorValues } = action.payload
      const color = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`
      state.playlists[index].background = color
      localStorage.setItem("playlists", JSON.stringify(state.playlists))
    }
  }
})

export const {
  selectTab,
  newPlaylist,
  updatePlaylist,
  deletePlaylist,
  setPlaylistBackground
} = spotifySlice.actions

export default spotifySlice.reducer