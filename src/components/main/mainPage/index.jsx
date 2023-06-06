import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { setDefaultBackground } from "../../../store/structureSlice";

import { useEffect, useRef } from "react";
import HeaderSection from "../mainPage/headerSection";
import CardWide from "../mainPage/cardWide";
import Section from "../mainPage/section";
import Card from "../mainPage/card";
import styled from "styled-components";

const MainPage = ({ headerBackground, setDefaultBackground }) => {
  useEffect(() => {
    setDefaultBackground();
  }, [setDefaultBackground]);

  const firstTriggerRef = useRef(null);
  useEffect(() => {
    window.spotifyFirstTriggerEl = firstTriggerRef.current;
  }, []);

  return (
    <Container ref={firstTriggerRef}>
      <Background style={{ backgroundColor: headerBackground }} />
      <Content>
        <HeaderSection>
          <CardWide name="Daily Mix 1" />
          <CardWide name="Daily Mix 2" />
          <CardWide name="Liked Songs" image="/images/liked-songs.png" />
          <CardWide name="My Playlist #1" />
          <CardWide name="My Playlist #2" />
          <CardWide name="My Playlist #3" />
        </HeaderSection>

        <Section title="Shows you might like">
          <Card name="Podcast 1" description="Podcast 1" />
          <Card name="Podcast 2" description="Podcast 2" />
          <Card name="Podcast 3" description="Podcast 3" />
          <Card name="Podcast 4" description="Podcast 4" />
          <Card name="Podcast 5" description="Podcast 5" />
        </Section>

        <Section title="Made For whitehorse21">
          <Card
            name="Daily Mix 1"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit."
            player
          />
          <Card
            name="Daily Mix 2"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit."
            player
          />
          <Card
            name="Daily Mix 3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit."
            player
          />
          <Card
            name="Daily Mix 4"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit."
            player
          />
          <Card
            name="Daily Mix 5"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit."
            player
          />
        </Section>

        <Section title="Recently played">
          <Card
            name="My Playlist #1"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing."
            player
          />
          <Card
            name="My Playlist #2"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing."
            player
          />
          <Card
            name="My Playlist #3"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing."
            player
          />
          <Card
            name="My Playlist #4"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing."
            player
          />
          <Card
            name="My Playlist #5"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing."
            player
          />
        </Section>

        <Section title="Your favorite artists">
          <Card name="Kygo" image="/images/kygo.jpg" player artist />
          <Card
            name="WALK THE MOON"
            image="/images/walk-the-moon.jpg"
            player
            artist
          />
          <Card
            name="Sandro Cavazza"
            image="/images/sandro-cavazza.jpg"
            player
            artist
          />
          <Card
            name="James Blunt"
            image="/images/james-blunt.jpg"
            player
            artist
          />
          <Card
            name="David Guetta"
            image="/images/david-guetta.jpg"
            player
            artist
          />
        </Section>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerBackground: state.structure.header.background,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setDefaultBackground }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

const Container = styled.div`
  position: relative;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 8.8rem 3.2rem 3.2rem;
  position: relative;
  max-width: 195.5rem;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  inset: 0 0 auto 0;
  height: 33.2rem;
  opacity: 0.3;
  background-image: linear-gradient(to top, var(--black2) 10%, transparent);
  transition: background-color 0.8s ease;
  z-index: -1;
`;
