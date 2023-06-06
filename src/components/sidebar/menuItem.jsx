import { connect } from "react-redux"
import { selectTab } from "../../store/spotifySlice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { Link } from "react-router-dom"

import styled from "styled-components"
import Icons from "../icons"

const MenuItem = ({ label, path, action, bg, icon, activeTab, selectTab, margin, padding, button }) => {
  const active = label === activeTab
  const myAction = action ? action : () => selectTab(label)

  let classNames = ''
  classNames += active ? 'active' : ''
  classNames += margin ? ' margin' : ''
  classNames += padding ? ' padding' : ''

  return (
    <Li>
      {!button ? (
        <Link to={path} className={classNames} onClick={myAction}>
          <Icons icon={icon} active={active} bg={bg} />
          <span>{label}</span>
        </Link>
      ) : (
        <button className={classNames} onClick={myAction}>
          <Icons icon={icon} active={active} bg={bg} />
          <span>{label}</span>
        </button>
      )}
    </Li>
  )
}

const mapStateToProps = state => ({ activeTab: state.spotify.tabs.activeTab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)

const Li = styled.li`
 a, button {
   display: flex;
   align-items: center;
   height: 4rem;
   gap: 1.6rem;
   padding: 0 1.6rem;
   font-weight: 700;
   color: var(--white);
   font-size: var(--fs-14);
   line-height: var(--lh-16);
   font-family: "Spotify Circular Bold", sans-serif;
   opacity: 0.7;
   cursor: pointer;
   transition: opacity 0.2s linear;

   &.padding {
     padding: 0 2.4rem;
   }
  
   &.margin > svg {
     padding-right: 0.4rem;
     margin-left: 0.7rem;
   }
  
   &:is(.active, :hover) {
     opacity: 1;
   }
 }
`