import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomButton from './CustomButton'

const CustomFieldText = ({ title="Test", idName="Test", placeholder="Test", textCustomButton="Test", maxWidth, onSubmit}) => {
  return (
    <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: {
            xs: "28px 22px",
            sm: "36px",
          },
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
          maxWidth: maxWidth,
          display: "flex",
          mx: "auto",
          flexDirection: "column",
          gap: 3,
        }}
    >
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>{title}</Typography>
          <TextField fullWidth type="text" id={idName} name={idName} placeholder={placeholder} variant="outlined"/>
        </Box>

        <CustomButton color="#fff" text={textCustomButton} backgroundColor="#2563eb" type="submit"/>
    </Box>
  )
}

export default CustomFieldText
