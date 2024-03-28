import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
    primary: {
      main: '#90caf9', // Example color, change as needed
    },
    background: {
      default: '#121212', // Example color, change as needed
      paper: '#1c1c1c', // Example color, change as needed
    },
    text: {
      primary: '#e0e0e0', // Example color, change as needed
      secondary: '#a0a0a0', // Example color, change as needed
    },
  },
  components: {
    // You may need to customize specific components of the calendar here
    MuiPickersDay: {
      styleOverrides: {
        root: {
          // Define styles for the day cells
          color: '#fff',
          "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          "&.Mui-selected": {
            backgroundColor: '#90caf9', // Example color, selected day
            color: 'black',
            "&:hover": {
              backgroundColor: 'rgba(144, 202, 249, 0.8)',
            },
          },
        },
      },
    },
  },
});

export default function Calendar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='bg-gray-900 flex justify-center items-center h-[100vh]'> {/* Adjust bg-color based on your screenshot */}
          <DateRangeCalendar calendars={1} />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
