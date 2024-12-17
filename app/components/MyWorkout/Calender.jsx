"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Typography } from "@mui/material";
const Calender = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Box sx={{mt: "30px",display:'flex',background:'#fff',xs:{alignItems:'center'} }}>
      {isClient &&  (
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{display:'flex',flexDirection:{xs:'row',md:'column'}}} >
          <StaticDatePicker
            orientation="landscape"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
            sx={{display:{xs:'inline',md:'inline'}}}
          />
          {/* <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{display:{xs:'inline-block',md:'none'}}}
          /> */}
        </LocalizationProvider>
      )}
    </Box>
  );
};

export default Calender;
