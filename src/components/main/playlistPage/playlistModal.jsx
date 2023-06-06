import { useState, useEffect } from "react"
import ModalInput from "./modalInput"
import Icons from "../../icons"
import Div from "../../div"
import styled from "styled-components"

const PlaylistModal = ({ playlist, savePlaylist, modal, inputReferences }) => {
  const { nameRef, imageRef, descriptionRef } = inputReferences
  const { modalVisible, toggleModal } = modal

  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")

  const postNewPlaylist = () => savePlaylist({
    name: name.trim(),
    imageUrl: imageUrl.trim(),
    description: description.trim()
  })

  function keyHandler(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      postNewPlaylist()
    }
  }

  useEffect(() => {
    setName(playlist.name || "")
    setImageUrl(playlist.imageUrl || "")
    setDescription(playlist.description || "")
  }, [playlist, modalVisible])

  return (
    <Container className={`${modalVisible ? "visible" : ""}`}>
      <Div flex align="center" justify="center" sizeX="100%" sizeY="100%">
        <div className="modal-container">
          <Div flex mb="2.4rem" justify="space-between">
            <h1 className="modal-title">Edit details</h1>
            <button className="modal-close-btn" onClick={() => toggleModal()}>
              <Icons icon="xmark-mini" />
            </button>
          </Div>

          <Div flex gap="1.6rem">
            <div className="image-container" onClick={() => imageRef.current.select()}>
              {playlist.imageUrl ? (
                <img src={playlist.imageUrl} alt="Playlist" />
              ) : (
                <div className="default-image">
                  <Icons icon="ottava" />
                </div>
              )}
              <div
                className="choose-photo"
                style={{ backgroundColor: playlist.imageUrl ? "var(--black-op-07)" : "var(--gray3)" }}>
                <div>
                  <Icons icon="pen" />
                  <span>Choose photo</span>
                </div>
              </div>
            </div>

            <Div flex column gap="1.6rem" grow="1">
              <ModalInput
                required
                name="Name"
                value={name}
                maxLength={100}
                reference={nameRef}
                onKeyDown={keyHandler}
                onChange={setName}
                placeholder="Add a name" />
              <ModalInput
                name="Image"
                type="url"
                value={imageUrl}
                maxLength={300}
                reference={imageRef}
                onKeyDown={keyHandler}
                onChange={setImageUrl}
                placeholder="https://i.imgur.com/example.png" />
              <ModalInput
                name="Description"
                element="textarea"
                value={description}
                maxLength={300}
                reference={descriptionRef}
                onKeyDown={keyHandler}
                onChange={setDescription}
                placeholder="Add an optional description" />
            </Div>
          </Div>

          <Div flex justify="flex-end" my="0.8rem">
            <button className="modal-save-btn" onClick={postNewPlaylist}>Save</button>
          </Div>

          <div>
            <span className="advice">By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.</span>
          </div>
        </div>
      </Div>
    </Container>
  )
}

export default PlaylistModal

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--black-op-07);
  visibility: hidden;
  opacity: 0;
  z-index: 100;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  .modal-container {
    background-color: var(--gray3);
    padding: 2.4rem;
    border-radius: 0.8rem;
    box-shadow: 0 4px 4px rgb(0 0 0 / 30%);
    color: var(--white);
    min-height: 384px;
    width: 524px;
  }

  .modal-title {
    font-size: var(--fs-24);
    line-height: var(--lh-28);
    letter-spacing: -0.96px;
    transform: translateY(3px);
  }

  .modal-close-btn {
    color: var(--white-op-07);
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -0.4rem -0.8rem 0 0;
    border-radius: 3.2rem;

    &:hover {
      background-color: var(--white-op-01);
    }
  }

  .image-container {
    width: 18rem;
    height: 18rem;
    box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
    position: relative;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-user-drag: none;
    }

    .default-image {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: var(--gray2);
      background-color: var(--gray3);
      color: #7f7f7f;

      & > * {
        width: 6.4rem;
        transform: translateY(-4px);
      }
    }

    .choose-photo {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray3);
      color: var(--white);
      opacity: 0;

      > div {
        transform: translateY(8px);
        text-align: center;
      }
      
      span {
        display: block;
        margin-top: 1px;
        font-size: var(--fs-16);
        line-height: var(--lh-24);
        font-family: "Spotify Circular Book", sans-serif;
        user-select: none;
      }
    }

    &:hover .choose-photo {
      opacity: 1;
    }
  }

  .input-wrapper:last-child {
    flex: 1;
  }

  .modal-save-btn {
    padding: 1.2rem 3.2rem;
    font-size: var(--fs-16);
    line-height: var(--lh-24);
    font-family: "Spotify Circular Cyrillic", sans-serif;
    background-color: var(--white);
    border-radius: 500px;

    &:hover {
      transform: scale(1.04);
    }

    &:active {
      transform: scale(1);
      background-color: var(--white-op-07);
    }
  }

  .advice {
    color: var(--white);
    font-size: var(--fs-11);
    line-height: var(--lh-16);
  }
`