import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CustomCard = ({title="Test", text="Test 2"}) => {
  return (
    <Box
        sx={{
        width: {
            xs: "100%",
            sm: "300px",
        },
        p: 3,
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        textAlign: "center",
        }}
    >
        <Typography
            variant="h6"
            sx={{
                fontWeight: 700,
                mb: 1,
            }}
        >
            {title}
        </Typography>

        <Typography
            sx={{
                color: "#6b7280",
                lineHeight: 1.6,
            }}
        >
            {text}
        </Typography>
    </Box>
  )
}

export default CustomCard
