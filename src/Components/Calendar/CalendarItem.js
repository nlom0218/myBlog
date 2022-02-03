import { getDate, getDay, isToday } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  padding: 1.25rem;
  background-color: ${props => props.theme.bgColor};
  transition: background-color 1s ease;
  display: grid;
  grid-template-rows: auto 1fr;
`

const Day = styled.div`
  justify-self: flex-end;
  color: ${props => props.sun && props.theme.redColor};
  opacity: ${props => props.curMonth ? 1 : 0.4};
  transition: ${props => props.sun && "color 1s ease"};
  position: relative;
`

const Line = styled.div`
  position: absolute;
  bottom: -3px;
  bottom: -0.1875rem;
  width: 100%;
  height: 3px;
  height: 0.1875rem;
  background-color: ${props => props.theme.redColor};
  transition: background-color 1s ease;
`

const CalendarItem = ({ item }) => {
  console.log(isToday(item.date));
  return (<Container>
    <Day
      sun={getDay(item.date) === 0}
      curMonth={item.month === "cur"}
    >
      <div>{getDate(item.date)}일</div>
      {isToday(item.date) && <Line></Line>}
    </Day>
  </Container>);
}

export default CalendarItem;