import { connect } from "react-redux"
import PlaylistItem from "./playlistItem"
import styled from "styled-components"

const Playlists = ({ playlists = [] }) => (
  <Container>
    <div className="scroll">
      <ul>
        {[...playlists].reverse()
          .map(playlist => <PlaylistItem key={playlist.id} playlist={playlist} />)}
      </ul>
    </div>
  </Container>
)

const mapStateToProps = state => ({ playlists: state.spotify.playlists })
export default connect(mapStateToProps)(Playlists)

const Container = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    box-shadow: -40px 0px 10px 10px rgb(0 0 0 / 60%);
    z-index: 2;
  }

  .scroll {
    height: 100%;
    padding: 0.8rem 0;
    overflow-x: auto;
  }

  .scroll::-webkit-scrollbar {
    width: 12px;
  }
  
  .scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  .scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`