import React, { useEffect, useState } from 'react';
import { format, startOfWeek, getWeeksInMonth, addMonths, startOfMonth, addDays, addWeeks, getMonth } from "date-fns"
import CalendarItem from '../../Components/Calendar/CalendarItem';

const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const [dateArr, setDateArr] = useState(undefined)

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

  return (<div>
    {format(date, "yyyy년MM월")}
    <div onClick={onClickBtn}>+</div>
    <div onClick={onClickBtnMinus}>-</div>
    {dateArr && dateArr.map((item, index) => {
      return <CalendarItem key={index} item={item} />
    })}
  </div>);
}

export default Calendar;