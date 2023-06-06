import styled from "styled-components"

const Div = props => <Element {...props}>{props.children}</Element>

export default Div

const Element = styled.div`
  ${({ flex }) => flex ? "display: flex;" : ""}
  ${({ column }) => column ? "flex-direction: column;" : ""}
  ${({ align }) => align ? `align-items: ${align};` : ""}
  ${({ justify }) => justify ? `justify-content: ${justify};` : ""}
  ${({ grow }) => grow ? `flex-grow: ${grow};` : ""}
  ${({ gap }) => gap ? `gap: ${gap};` : ""}
  ${({ sizeY }) => sizeY ? `height: ${sizeY};` : ""}
  ${({ sizeX }) => sizeX ? `width: ${sizeX};` : ""}
  ${({ mt }) => mt ? `margin-top: ${mt};` : ""}
  ${({ mr }) => mr ? `margin-right: ${mr};` : ""}
  ${({ mb }) => mb ? `margin-bottom: ${mb};` : ""}
  ${({ ml }) => ml ? `margin-left: ${ml};` : ""}
  ${({ my }) => my ? `margin: ${my} 0;` : ""}
  ${({ mx }) => mx ? `margin: 0 ${mx};` : ""}
  ${({ margin }) => margin ? `margin: ${margin};` : ""}
  ${({ pt }) => pt ? `padding-top: ${pt};` : ""}
  ${({ pr }) => pr ? `padding-right: ${pr};` : ""}
  ${({ pb }) => pb ? `padding-bottom: ${pb};` : ""}
  ${({ pl }) => pl ? `padding-left: ${pl};` : ""}
  ${({ py }) => py ? `padding: ${py} 0;` : ""}
  ${({ px }) => px ? `padding: 0 ${px};` : ""}
  ${({ padding }) => padding ? `padding: ${padding};` : ""}
  ${({ overflow }) => overflow ? `overflow: ${overflow};` : ""}
`