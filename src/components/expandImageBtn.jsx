import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { toggleExpandAlbum } from "../store/structureSlice"
import Icons from "./icons";
import styled from "styled-components";

const ExpandImageBtn = ({ toggleExpandAlbum, arrowDown }) => (
  <Button
    onClick={() => toggleExpandAlbum()}
    className={`expand-image ${arrowDown ? "arrowDown" : ""}`}>
    <Icons icon="arrow" />
  </Button>
)

const mapDispatchToProps = dispatch => bindActionCreators({ toggleExpandAlbum }, dispatch)
export default connect(null, mapDispatchToProps)(ExpandImageBtn)

const Button = styled.button`
  position: absolute;
  inset: 0.5rem 0.5rem auto auto;
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .7);
  color: var(--white-op-07);
  opacity: 0;

  &:hover {
    background-color: rgba(0, 0, 0, .8);
    transform: scale(1.1);
    color: var(--white);
  }

  &.arrowDown {
    transform: rotate(180deg);

    &:hover {
      transform: scale(1.1) rotate(180deg);
    }
  }
`