import { useState } from "react";
import Dropdown from "../dropdown";
import DropdownItem from "../dropdownItem";
import Icons from "../icons";
import styled from "styled-components";

const UserButton = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <button
        className={`user-button ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <div className="user-image">
          <Icons icon="user" />
        </div>
        <div className="user-name">
          <span>whitehorse21</span>
        </div>
        <div className="user-arrow">
          <Icons icon="triangle" />
        </div>
      </button>

      <Dropdown active={active} bottom right>
        <DropdownItem name="Account" icon="redirect" />
        <DropdownItem name="Profile" />
        <DropdownItem name="Log out" />
      </Dropdown>
    </Container>
  );
};

export default UserButton;

const Container = styled.div`
  position: relative;

  .user-button {
    display: flex;
    align-items: center;
    background-color: var(--black-op-07);
    color: var(--white);
    border-radius: 23px;
    padding: 0.2rem;
    gap: 0.8rem;
    cursor: pointer;

    &:is(:hover, .active) {
      background-color: var(--gray3);
    }
  }

  .user-image {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #535353;
    border-radius: 50%;

    > svg {
      transform: translateY(-2px);
    }
  }

  .user-name {
    font-family: "Spotify Circular Cyrillic", sans-serif;
    font-size: var(--fs-14);
    transform: translateY(2px);
  }

  .user-arrow {
    margin-right: 0.6rem;
  }

  .user-button.active .user-arrow > svg {
    transform: rotate(180deg);
  }
`;
