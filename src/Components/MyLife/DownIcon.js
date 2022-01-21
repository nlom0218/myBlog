import React from 'react';
import { BsChevronDoubleDown } from "react-icons/bs"
import styled from 'styled-components';
import { welcomeDownIconAni } from '../../animation/textColorChangeAni';
import { color } from '../../styles';

const SDownIcon = styled.div`
  right: 20px;
  right: 1.25rem;
  position: absolute;
  animation: ${welcomeDownIconAni} 1.5s linear infinite;
  svg {
    display: flex;
    right: 20px;
    right: 1.25rem;
    color: ${color.white};
    font-size: 2em;
    font-size: 2rem;
    filter: drop-shadow(2px 2px 2px rgb(0, 0, 0))
  }
`

const DownIcon = () => {
  return (<SDownIcon><BsChevronDoubleDown /></SDownIcon>);
}

export default DownIcon;