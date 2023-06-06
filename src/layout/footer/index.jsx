import NowPlaying from "../../components/footer/nowPlaying"
import PlayerControl from "../../components/footer/playerControl"
import SideControl from "../../components/footer/sideControl"

import { Container } from "./styles"

const Footer = props => (
  <Container>
    <NowPlaying />
    <PlayerControl />
    <SideControl />
  </Container>
)

export default Footer