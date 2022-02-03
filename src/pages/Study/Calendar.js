import React, { useEffect, useState } from 'react';
import { format, startOfWeek, getWeeksInMonth, addMonths, startOfMonth, addDays, addWeeks, getMonth } from "date-fns"
import CalendarItem from '../../Components/Calendar/CalendarItem';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Container = styled.div``

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  padding: 20px;
  padding: 1.25rem;
  align-items: center;
  column-gap: 20px;
  column-gap: 1.25rem;
  .calendar_btn {
    cursor: pointer;
    color: ${props => props.theme.menuFontColor};
    background-color: ${props => props.theme.menuBgColor};
    transition: color 1s ease, background-color 1s ease;
  }
`

const Title = styled.div`
  font-size: 2em;
  font-size: 2rem;
`

const TodayBtn = styled.div`
  padding: 5px 16px;
  padding: 0.3125rem 1rem;
  border-radius: 20px;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
`

const Btn = styled.div`
  padding: 5px;
  padding: 0.3125rem;
  border-radius: 50%;
  svg {
    font-size: 1.25em;
    font-size: 1.25rem;
    display: flex;
  }
`

const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const [dateArr, setDateArr] = useState(undefined)

  const onClickTodayBtn = () => {
    const newDate = new Date()
    setDate(newDate)
  }

  const onClickBtn = () => {
    const newDate = addMonths(date, 1)
    setDate(newDate)
  }
  const onClickBtnMinus = () => {
    const newDate = addMonths(date, -1)
    setDate(newDate)
  }

  useEffect(() => {
    const newDateArr = []
    const monthStart = startOfMonth(date)
    const weekStart = startOfWeek(monthStart, { weekStartsOn: 0 })
    const weekLength = getWeeksInMonth(date)
    for (let i = 0; i < weekLength; i++) {
      const tempWeekStart = addWeeks(weekStart, i)
      for (let i = 0; i < 7; i++) {
        const tempDate = addDays(tempWeekStart, i)
        if (getMonth(tempDate) === getMonth(date)) {
          newDateArr.push({
            date: tempDate,
            month: 'cur'
          })
        } else if (getMonth(tempDate) < getMonth(date)) {
          newDateArr.push({
            date: tempDate,
            month: 'pre'
          })
        } else if (getMonth(tempDate) > getMonth(date)) {
          newDateArr.push({
            date: tempDate,
            month: 'next'
          })
        }
      }
    }
    setDateArr(newDateArr)
  }, [date])

  return (<Container>
    <TopContainer>
      <Title>{format(date, "yyyy년 MM월")}</Title>
      <TodayBtn className="calendar_btn" onClick={onClickTodayBtn}>TODAY</TodayBtn>
      <Btn className="calendar_btn" onClick={onClickBtnMinus}><IoIosArrowBack /></Btn>
      <Btn className="calendar_btn" onClick={onClickBtn}><IoIosArrowForward /></Btn>
    </TopContainer>
    {dateArr && dateArr.map((item, index) => {
      return <CalendarItem key={index} item={item} />
    })}
  </Container>);
}

export default Calendar;