import { useRef, useState, useEffect } from "react"
import Dropdown from "../../dropdown"
import DropdownItem from "../../dropdownItem"
import Icons from "../../icons"
import Div from "../../div"
import styled from "styled-components"

const PlaylistContent = ({ toggleModal, deletePlaylist, playlistBackground }) => {

  const [dropdown, setDropdown] = useState(false)
  const [search, setSearch] = useState("")
  const searchRef = useRef(null)

  function editDetails() {
    setDropdown(false)
    toggleModal()
  }

  const style = { "--playlist-bg-shadow": playlistBackground || "rgb(83, 83, 83)" }

  const secondTriggerRef = useRef(null)
  useEffect(() => { window.spotifySecondTriggerEl = secondTriggerRef.current }, [])

  return (
    <Container ref={secondTriggerRef} style={style}>
      <Div padding="2.4rem 3.2rem">
        <div className="button-container">
          <button className="btn" onClick={() => setDropdown(!dropdown)}>
            <Icons icon="ellipsis" />
          </button>

          <Dropdown active={dropdown} top left minWidth={"16.2rem"}>
            <DropdownItem name="Add to queue" />
            <DropdownItem name="Go to playlist radio" />
            <DropdownItem name="Add to profile" />
            <DropdownItem name="Edit details" action={editDetails} separator />
            <DropdownItem name="Delete" action={deletePlaylist} />
            <DropdownItem name="Share" separator />
            <DropdownItem name="Open in Desktop app" separator />
          </Dropdown>
        </div>
      </Div>

      <Div px="3.2rem">
        <section>
          <div>
            <div>
              <div className="title-container">
                <h1>Let's find something for your playlist</h1>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search for songs or episodes"
                  value={search}
                  ref={searchRef}
                  onChange={event => setSearch(event.target.value)} />
                <div
                  className="input-search-icon"
                  onClick={() => searchRef.current.focus()}>
                  <Icons icon="search-mini" />
                </div>
                {search !== "" ? (
                  <button
                    className="erase-input-icon"
                    onClick={() => setSearch("")}>
                    <Icons icon="xmark-mini" />
                  </button>
                ) : false}
              </div>
            </div>

            <div className="erase-section-container">
              <button className="erase-section-button">
                <Icons icon="xmark-large" />
              </button>
            </div>
          </div>
          <div className="fillSpace"></div>
        </section>
      </Div>
    </Container>
  )
}

export default PlaylistContent

const Container = styled.div`
  position: relative;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 20rem;
    background-color: var(--playlist-bg-shadow);
    background-image: linear-gradient(rgba(0, 0, 0, .6) 0, var(--main-bg) 100%);
    z-index: -1;
  }

  .button-container {
    display: inline-block;
    position: relative;
  }

  .btn {
    color: var(--white-op-06);

    &:hover {
      color: var(--white);
    }
  }

  section > div:not(.fillSpace) {
    padding: 2.4rem 0;
    margin-top: 2.4rem;
    border-top: 1px solid var(--white-op-01);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .fillSpace {
    min-height: calc(60vh - 12.2rem);
  }


  h1 {
    color: var(--white);
    font-size: var(--fs-24);
    line-height: var(--lh-28);
    letter-spacing: -0.96px;
    margin-bottom: 1.4rem;
  }

  .input-container {
    position: relative;

    input {
      background-color: var(--white-op-01);
      color: var(--white-op-07);
      font-size: var(--fs-14);
      font-family: "Spotify Circular Book", sans-serif;
      width: 100%;
      height: 4.0rem;
      padding: 0.8rem 3.2rem;
      border-radius: 0.4rem;
      border: 0;
      text-overflow: ellipsis;
      
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--white-op-07);
      }
    }

    .input-search-icon,
    .erase-input-icon {
      position: absolute;
      transform: translateY(-50%);
      color: var(--white-op-07);
    }

    .input-search-icon {
      left: 1rem;
      top: 54%;
    }

    .erase-input-icon {
      right: 1rem;
      top: 50%;
    }
  }

  .erase-section-button {
    margin-right: 0.8rem;
    color: var(--white-op-07);
  }
`