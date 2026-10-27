import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react'

const CustomData = ({ icono, titulo, valor}) => {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <Box sx={{ color: "#3979a8", pt: 0.2 }}>{icono}</Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography variant="body2" sx={{ color: "#718096", mb: 0.5 }}>
          {titulo}
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontWeight: 600, overflowWrap: "anywhere" }}
        >
          {valor ?? "No disponible"}
        </Typography>
      </Box>
    </Stack>
  );
}

export default CustomData
