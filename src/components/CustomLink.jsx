import { Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

const CustomLink = ({colour="red", text, route}) => {
  return (
    <Typography
    component={RouterLink}
    to={route}
    sx={{
        color: "black",
        textDecoration: "none",
        transition: "color 0.5s ease",
        "&:hover": {
            color: colour,
        },
    }}
    >
      {text}
    </Typography>
  )
}

export default CustomLink
