import React from 'react';
import styled from 'styled-components';
import { color, customMedia } from '../../styles';
import DownIcon from './DownIcon';

const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100vh;
  position: relative;
`

const FristColor = styled.div`
  background-color: #a8e6cf;
`

const SecondColor = styled.div`
  background-color: #dcedc1;
`

const ThirdColor = styled.div`
  background-color: #ffd3b6;
`

const FourthColor = styled.div`
  background-color: #ffaaa5;
`

const FifthColor = styled.div`
  background-color: #ff8b94;
`

const Text = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
	font-weight: 600;
	line-height: 120%;
	text-align: left;
  font-size: 3em;
	font-size: 3rem;
	color: ${color.black};
	font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: left;
  font-weight: 600;
  text-shadow: -5px 5px ${color.white};
  ${customMedia.greaterThan(`tablet`)`
  	font-size: 5em;
	  font-size: 5rem;
  `}
`

const IntroStart = ({ number }) => {
  return (<Container>
    <FristColor></FristColor>
    <SecondColor></SecondColor>
    <ThirdColor></ThirdColor>
    <FourthColor></FourthColor>
    <FifthColor></FifthColor>
    <Text>
      <div>
        <div>아무도 관심없는</div>
        <div>자기소개 시간</div>
      </div>
    </Text>
    <DownIcon />
  </Container>
  );
}

export default IntroStart;