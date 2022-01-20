import { useReactiveVar } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { disableRightContents, enableRightContents, rightContentsVar } from '../../apollo';
import ThemeBtn from './ThemeBtn';

const Container = styled.div`
  position: relative;

`

const BasicContainer = ({ children }) => {
  return (<Container>
    {children}
  </Container>);
}

export default BasicContainer;