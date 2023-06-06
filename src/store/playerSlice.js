import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  currentTime: 0,
  isPlaying: false,
  volume: {
    currentVolume: 0,
    maxVolume: 100,
    lastVolumeOnMute: 0,
  },
  currentMusic: {
    artist: "WALK THE MOON",
    name: "Shut Up and Dance",
    durationInSeconds: 199,
    liked: false,
    albumImage: "/images/album-image.jpg",
  }
}

export const playerSlice = createSlice({
  name: 'player',
  initialState: INITIAL_STATE,

  reducers: {
    togglePlaying: state => {
      if (!state.isPlaying && state.currentTime >= state.currentMusic.durationInSeconds) {
        state.currentTime = 0
      }
      state.isPlaying = !state.isPlaying
    },

    toggleLiked: state => {
      state.currentMusic.liked = !state.currentMusic.liked
    },

    updateTime: (state, action) => {
      state.currentTime = action.payload

      if (state.currentTime >= state.currentMusic.durationInSeconds) {
        state.isPlaying = false
      }
    },

    updateVolume: (state, action) => {
      state.volume.currentVolume = action.payload
    },

    toggleMute: state => {
      const { currentVolume, lastVolumeOnMute } = state.volume

      if (currentVolume > 0) {
        state.volume.lastVolumeOnMute = currentVolume
        state.volume.currentVolume = 0
      } else if (currentVolume === 0 && lastVolumeOnMute === 0) {
        state.volume.currentVolume = 70
      } else {
        state.volume.currentVolume = lastVolumeOnMute
      }
    },

    prevMusic: state => {
      state.currentTime = 0
      state.isPlaying = true
    }
  }
})

export const {
  togglePlaying,
  toggleLiked,
  updateTime,
  updateVolume,
  toggleMute,
  prevMusic,
} = playerSlice.actions

export default playerSlice.reducer