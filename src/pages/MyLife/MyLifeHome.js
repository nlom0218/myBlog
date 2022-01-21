import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { welcomeDownIconAni, welcomeTitleAni } from '../../animation/textColorChangeAni';
import { color, customMedia } from '../../styles';
import { BsChevronDoubleDown } from "react-icons/bs"
import IntroStart from '../../Components/MyLife/IntroStart';
import DownIcon from '../../Components/MyLife/DownIcon';

const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
`

const Welcome = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  background: url("https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80");
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: auto auto 1fr;
  row-gap: 40px;
  row-gap: 2.5rem;
  ${customMedia.greaterThan(`tablet`)`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  `}
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

const MyLifeHome = () => {
  const [number, setNumber] = useState(1)

  const outerDivRef = useRef();

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          setNumber(2)
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          setNumber(3)
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          setNumber(1)
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          setNumber(2)
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;

    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (<Container ref={outerDivRef}>
    <Welcome>
      <ImageDescription>Earthrise—the rising Earth greeted the Apollo 8 astronauts on December 24, 1968 as they came from behind the Moon after the fourth nearside orbit</ImageDescription>
      <WelcomeTitle>WELCOME TO MY SPACE</WelcomeTitle>
      <DownIcon><BsChevronDoubleDown /></DownIcon>
    </Welcome>
    <IntroStart number={number} />
  </Container>);
}

export default MyLifeHome;