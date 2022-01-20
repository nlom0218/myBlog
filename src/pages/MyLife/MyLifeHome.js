import React from 'react';
import styled from 'styled-components';
import { welcomeDownIconAni, welcomeTitleAni } from '../../animation/textColorChangeAni';
import { color } from '../../styles';
import { BsChevronDoubleDown } from "react-icons/bs"

const Container = styled.div`
`

const Welcome = styled.div`
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80");
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

const ImageDescription = styled.div`
  padding: 10px;
  padding: 0.625rem;
  align-self: flex-start;
  justify-self: flex-end;
  color: ${color.white};
  opacity: 0.6;
  font-size: 14px;
  font-size: 0.875rem;
  grid-column: 1 / -1;
`

const WelcomeTitle = styled.div`
  align-self: flex-start;
  justify-self: center;
  color: ${color.white};
  font-size: 2.75em;
  font-size: 2.75rem;
  letter-spacing: 12px;
  letter-spacing: 0.75rem;
  text-align: center;
  line-height: 160%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  background-image: linear-gradient(92deg, #C9D6FF, #E2E2E2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${welcomeTitleAni} 3s infinite linear;
`

const DownIcon = styled.div`
  grid-column: 2 / 3;
  grid-row: -2 / -1;
  position: relative;
  svg {
    display: flex;
    position: absolute;
    right: 20px;
    right: 1.25rem;
    color: ${color.white};
    font-size: 2em;
    font-size: 2rem;
    animation: ${welcomeDownIconAni} 1.5s linear infinite;
    filter: drop-shadow(2px 2px 2px rgb(0, 0, 0))
  }
`

const MyLifeHome = () => {
  return (<Container>
    <Welcome>
      <ImageDescription>Earthrise—the rising Earth greeted the Apollo 8 astronauts on December 24, 1968 as they came from behind the Moon after the fourth nearside orbit</ImageDescription>
      <WelcomeTitle>WELCOME TO MY SPACE</WelcomeTitle>
      <DownIcon><BsChevronDoubleDown /></DownIcon>
    </Welcome>
  </Container>);
}

export default MyLifeHome;