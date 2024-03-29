// Calendar.jsx
import React from 'react';
import { createTheme } from '@mui/material/styles';
import './calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Paper } from '@mui/material';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  return (
    <div className='bg-gray-800'>
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{backgroundColor: "rgb(31 41 55)"}}>
        <div className='flex w-[100%] justify-between items-end'>
            <div className='px-4 rounded-3xl bg-[#2E313F] btn'>
              <button className='text-4xl text-white mb-2'>&lt;</button>
            </div>
            <div className='px-4 rounded-3xl bg-[#2E313F] btn'>
              <button className='text-4xl text-white mb-2'>&gt;</button>
            </div>
        </div>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "100%", margin: '20px', backgroundColor: "rgb(31 41 55)"}}
        />
      </Paper>
    </Container>
    </div>
  );
};

export default MyCalendar;