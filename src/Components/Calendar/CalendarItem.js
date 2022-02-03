import { getDate, getDay } from 'date-fns';
import React from 'react';

const CalendarItem = ({ item }) => {
  return (<div>
    {getDate(item.date)}
  </div>);
}

export default CalendarItem;