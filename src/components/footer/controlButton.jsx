import { connect } from "react-redux"
import Icons from "../icons";
import styled from "styled-components"

const ControlButton = ({ icon, action, isPlaying = false, currentVolume, activeTab }) => {
  const active = icon === activeTab.toLowerCase()
  const myAction = action ? () => action() : event => event.preventDefault()

  return (
    <Button
      onClick={myAction}
      mainControl={icon === "playpause"}
      className={active ? "active" : ""}>
      <Icons
        icon={icon}
        isPlaying={icon === "playpause" ? isPlaying : false}
        currentVolume={icon === "volume" ? currentVolume : false} />
    </Button>
  )
}

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
export default connect(mapStateToProps)(ControlButton)

const Button = styled.button`
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  color: var(--white);
  opacity: ${props => props.mainControl ? '1' : '0.7'};

  &:hover {
    opacity: 1;
    transform: scale(${props => props.mainControl ? '1.05' : '1'});
  }

  &:active {
    opacity: ${props => props.mainControl ? '1' : '0.7'};
  }

  &.active {
    color: var(--green);
    opacity: 1;
  }

  &.active::before {
    position: absolute;
    content: "";
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 2px;
  }
`