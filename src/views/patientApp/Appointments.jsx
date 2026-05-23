import { useState } from "react"
import { Box, Typography, Button, Grid } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs from "dayjs"
import React from 'react'

const generateHours = () => {

  const hours = []

  let currentHour = 8
  let currentMinute = 0

  while (
    currentHour < 18 ||
    (currentHour === 18 && currentMinute <= 15)
  ) {

    const hour = `${String(currentHour).padStart(2, "0")}:${String(currentMinute).padStart(2, "0")}`

    hours.push(hour)

    currentMinute += 60

    if (currentMinute >= 60) {
      currentMinute = 0
      currentHour++
    }
  }

  return hours
}


const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [selectedHour, setSelectedHour] = useState(null)

  const hours = generateHours()

  return (
    <Box
      sx={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "10px 16px 64px"
      }}
    >

      <Box
        sx={{
          textAlign: "center",
          marginBottom: "24px"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#1f2933",
            margin: "12px",
            fontWeight: 800
          }}
        >
          Citas
        </Typography>
      </Box>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          disablePast
        />
      </LocalizationProvider>

      <Typography
        variant="h5"
        sx={{
          marginTop: "32px",
          marginBottom: "16px",
          fontWeight: 700
        }}
      >
        Horarios disponibles
      </Typography>

      <Grid container spacing={2}>

        {hours.map((hour) => (

          <Grid item key={hour}>
            <Button
              variant={selectedHour === hour ? "contained" : "outlined"}
              onClick={() => setSelectedHour(hour)}
            >
              {hour}
            </Button>
          </Grid>

        ))}

      </Grid>

      {selectedHour && (
        <Box
          sx={{
            marginTop: "32px"
          }}
        >
          <Typography variant="h6">
            Fecha:
          </Typography>

          <Typography>
            {selectedDate.format("DD/MM/YYYY")}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              marginTop: "12px"
            }}
          >
            Hora:
          </Typography>

          <Typography>
            {selectedHour}
          </Typography>
        </Box>
      )}

    </Box>
  )
}

export default Appointments
