import styled from "styled-components"

export const SidebarContainer = styled.aside`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  overflow: hidden;
`

export const MainNav = styled.nav`
  background-color: var(--sidebar-nav-bg);
  padding-top: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const HorizontalRule = styled.hr`
  position: relative;
  margin: 0.8rem 2.4rem 0;
  height: 1px;
  border: none;
  background-color: #282828;
  z-index: 3;
`