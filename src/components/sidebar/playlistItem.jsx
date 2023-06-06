import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const UserPlaylistItem = ({ playlist, activeTab }) => (
  <Li>
    <Link
      to={`/playlist/${playlist.id}`}
      className={activeTab === playlist.id ? 'active' : ''}>
      <span>
        {playlist.name}
      </span>
    </Link>
  </Li>
)

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
export default connect(mapStateToProps)(UserPlaylistItem)

const Li = styled.li`
  a {
    display: block;
    font-size: var(--fs-14);
    line-height: var(--lh-32);
    font-family: "Spotify Circular Book", sans-serif;
    opacity: 0.64;
    cursor: default;
    user-select: none;
    -webkit-user-drag: none;

    & > span {
      display: inherit;
      padding: 0 2.4rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:is(:hover, .active) {
      opacity: 1;
    }
  }
`