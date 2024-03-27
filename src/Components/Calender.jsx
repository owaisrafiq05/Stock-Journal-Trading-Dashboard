import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='bg-gray-500 flex justify-center h-[100vh]'>
        <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
          <DemoItem label="1 calendar">
            <DateRangeCalendar calendars={1} />
          </DemoItem>    
        </DemoContainer>
      </div>
    </LocalizationProvider>
  );
}
