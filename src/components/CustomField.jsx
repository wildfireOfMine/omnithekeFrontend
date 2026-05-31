import { Box, TextField, Typography } from '@mui/material';
import React from 'react'

const CustomField = ({label, name, value, edit, fieldStyle, handleInputChange, type = "text", placeholder = ""}) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#374151"
        }}
      >
        {label}
      </Typography>

      <TextField
        type={type}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={!edit}
        sx={fieldStyle}
        fullWidth
      />
    </Box>
  );
};
export default CustomField
