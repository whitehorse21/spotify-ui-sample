import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { selectTab } from "../../store/spotifySlice"
import { updateVolume, toggleMute } from "../../store/playerSlice"

import styled from "styled-components"

import ControlButton from "./controlButton"
import ProgressBar from "./progressBar"

const SideControl = ({ currentVolume, maxVolume, selectTab, updateVolume, toggleMute }) => (
  <Container>
    <ControlButton
      icon="lyric"
      action={() => selectTab("Lyric")} />
    <ControlButton
      icon="queue"
      action={() => selectTab("Queue")} />
    <ControlButton icon="device" />

    <div className="volume-container">
      <ControlButton
        icon="volume"
        currentVolume={currentVolume}
        action={toggleMute} />
      <ProgressBar
        value={currentVolume}
        max={maxVolume}
        onChange={value => updateVolume(value)} />
    </div>
  </Container>
)

const mapStateToProps = state => ({
  currentVolume: state.player.volume.currentVolume,
  maxVolume: state.player.volume.maxVolume
})
const mapDispatchToProps = dispatch => bindActionCreators({
  selectTab,
  updateVolume,
  toggleMute
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SideControl)

const Container = styled.div`
  display: flex;
  width: 30%;
  min-width: 18rem;
  justify-content: flex-end;
  align-items: center;

  .volume-container {
    display: flex;
    align-items: center;

    & > input {
      width: 93px;
    }

    & > button:hover ~ input {
      &::-webkit-slider-thumb {
        background: var(--white);
      }

      &::-moz-range-thumb {
        --moz-shadow-height: -4px;
        height: 12px;
        background: var(--white);
        border-radius: 50%;
      }

      &::-webkit-slider-runnable-track {
        background: var(--active-progress-bar);
        overflow: visible;
      }

      &::-moz-range-track {
        background: var(--active-progress-bar);
        overflow: visible;
      }
    }
  }
`