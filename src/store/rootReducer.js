import { configureStore } from "@reduxjs/toolkit"

import spotifySlice from "./spotifySlice"
import structureSlice from "./structureSlice"
import playerSlice from "./playerSlice"

export const store = configureStore({
  reducer: {
    spotify: spotifySlice,
    player: playerSlice,
    structure: structureSlice
  }
})