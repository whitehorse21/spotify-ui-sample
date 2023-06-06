import { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { togglePlaying, updateTime, prevMusic } from "../../store/playerSlice"

import useFormatMMSS from "../../hooks/useTimeFormatter"
import ControlButton from "./controlButton"
import ProgressBar from "./progressBar"
import Div from "../div"
import styled from "styled-components"

const PlayerControl = ({ music, togglePlaying, updateTime, prevMusic }) => {
  const { currentTime, isPlaying, durationInSeconds } = music
  const currentFormattedTime = useFormatMMSS(currentTime)
  const finalFormattedTime = useFormatMMSS(durationInSeconds)

  useEffect(() => {
    const timerId = isPlaying ? setInterval(() => {
      updateTime(currentTime + 1)
    }, 1000) : false

    return () => clearInterval(timerId)
  }, [currentTime, isPlaying, updateTime])

  return (
    <Container>
      <Div flex align="center" justify="center" gap="1.6rem" mb="0.8rem">
        <div className="control left">
          <ControlButton icon="shuffle" />
          <ControlButton
            icon="prev-music"
            action={prevMusic} />
        </div>
        <div className="main-control">
          <ControlButton
            icon="playpause"
            isPlaying={isPlaying}
            action={togglePlaying} />
        </div>
        <div className="control right">
          <ControlButton icon="next-music" />
          <ControlButton icon="repeat" />
        </div>
      </Div>

      <Div flex align="center" justify="center" gap="0.8rem">
        <div className="progress-time current">{currentFormattedTime}</div>
        <div className="progress-bar-container">
          <ProgressBar
            value={currentTime}
            max={durationInSeconds}
            onChange={value => updateTime(value)} />
        </div>
        <div className="progress-time final">{finalFormattedTime}</div>
      </Div>
    </Container>
  )
}

const mapStateToProps = state => ({
  music: {
    durationInSeconds: state.player.currentMusic.durationInSeconds,
    currentTime: state.player.currentTime,
    isPlaying: state.player.isPlaying
  }
})
const mapDispatchToProps = dispatch => bindActionCreators({
  togglePlaying,
  updateTime,
  prevMusic
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlayerControl)

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 72.2rem;
  width: 40%;

  .control {
    display: flex;
    gap: 0.8rem;
    width: 100%;

    &.left {
      justify-content: flex-end;
    }

    &.right {
      justify-content: flex-start;
    }
  }

  .progress-time {
    color: var(--gray2);
    font-size: var(--fs-11);
    line-height: var(--lh-16);
    font-family: "Spotify Circular Book", sans-serif;
    min-width: 4rem;

    &.current {
      text-align: right;
    }

    &.final{
      text-align: left;
    }
  }

  .progress-bar-container {
    flex: 1;
  }
`