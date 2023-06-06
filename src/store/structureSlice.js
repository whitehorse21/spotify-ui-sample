import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  expandAlbum: false,
  header: {
    left: null,
    opacity: 0,
    background: "#248524",
    prevBackground: null
  }
}

export const structureSlice = createSlice({
  name: 'structure',
  initialState: INITIAL_STATE,

  reducers: {
    updateHeaderLeft: (state, action) => {
      state.header.left = action.payload
    },

    toggleExpandAlbum: state => {
      state.expandAlbum = !state.expandAlbum
    },

    scaleHeaderBgOpacity: (state, action) => {
      const { headerBottom, firstTriggerTop, secondTriggerTop } = action.payload

      function scale(num, in_min, in_max, out_min, out_max) {
        const percentage = (num - in_min) / (in_max - in_min)
        let value = percentage * (out_max - out_min) + out_min
        return value = value < out_min ? out_min : value > out_max ? out_max : value
      }

      state.header.opacity = scale(headerBottom - headerBottom, firstTriggerTop, secondTriggerTop - headerBottom, 0, 1)
    },

    setBackground: (state, action) => {
      state.header.background = action.payload
    },

    getRandomBackground: state => {
      const colors = ["#808000", "#1e90ff", "#708090", "#4b0082", "#e6e6fa"]
      let random = Math.floor(Math.random() * colors.length)

      while (state.header.prevBackground === colors[random]) {
        random = Math.floor(Math.random() * colors.length)
      }

      state.header.background = colors[random]
      state.header.prevBackground = colors[random]
    },

    setDefaultBackground: state => {
      state.header.background = "#248524"
    }
  }
})

export const {
  updateHeaderLeft,
  toggleExpandAlbum,
  toggleUserDropdown,
  scaleHeaderBgOpacity,
  setBackground,
  getRandomBackground,
  setDefaultBackground,
} = structureSlice.actions

export default structureSlice.reducer