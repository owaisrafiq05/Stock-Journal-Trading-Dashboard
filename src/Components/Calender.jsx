import React from 'react';
import { createTheme } from '@mui/material/styles';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Paper } from '@mui/material';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  return (
    <div className='bg-gray-800'>
    <Container maxWidth="lg">
      <Paper elevation={3}>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: '20px' }}
        />
      </Paper>
    </Container>
    </div>
  );
};

export default MyCalendar;