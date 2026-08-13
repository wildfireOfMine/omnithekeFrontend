import { Box } from '@mui/system'
import React from 'react'

const CustomBox = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "24px 16px 64px"
      }}
    >
        <Box
            sx={{
            textAlign: "center",
            mb: 6
            }}
        >
        {children}
        </Box>
    </Box>
  )
}

export default CustomBox
