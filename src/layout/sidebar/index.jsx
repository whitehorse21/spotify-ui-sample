import { useRef, useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { updateHeaderLeft } from "../../store/structureSlice"

import Banner from "../../components/sidebar/banner"
import Menu from "../../components/sidebar/menu"
import Playlists from "../../components/sidebar/playlists"
import Footer from "../../components/sidebar/footer"

import {
  SidebarContainer,
  MainNav,
  HorizontalRule,
} from "./styles"

const Sidebar = ({ updateHeaderLeft }) => {
  const element = useRef(null)

  useEffect(() => {
    const updateSidebarWidth = () => {
      if (window.innerWidth <= 1024) {
        updateHeaderLeft(0)
        return
      }

      const right = element.current?.getBoundingClientRect().right || 0
      updateHeaderLeft(right)
    }

    updateSidebarWidth()
    window.addEventListener("resize", updateSidebarWidth)
    return () => window.removeEventListener("resize", updateSidebarWidth)
  }, [updateHeaderLeft])
  return (
    <SidebarContainer ref={element}>
      <MainNav>
        <Banner />
        <Menu />
        <HorizontalRule />
        <Playlists />
        <Footer />
      </MainNav>
    </SidebarContainer>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateHeaderLeft }, dispatch)
export default connect(null, mapDispatchToProps)(Sidebar)