import { Box } from '@mui/material'
import React from 'react'

const CustomCard = ({firstColour, secondColour, children}) => {
  return (
    <Box sx={{
        background: "linear-gradient(to bottom,  #8B0000, #FF0000)",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "10px",
        color: "white",
        display: "flex", 
        alignItems: "center",
        height: "125px", 
    }}>
        {children}
    </Box>
  )
}

export default CustomCard
