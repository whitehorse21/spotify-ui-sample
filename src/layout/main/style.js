import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  grid-column: 2;
  grid-row: 1;
  background-color: var(--main-bg);
  overflow-y: overlay;
  overflow-x: hidden;
  z-index: 14;

  ::-webkit-scrollbar {
    width: 12px;
    max-height: 50%;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-track-piece {
    margin-top: 64px;
  }
`