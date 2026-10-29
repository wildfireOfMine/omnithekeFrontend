import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const CustomSection = ({ icono, titulo, contenido }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2 }}>
        <Box sx={{ color: "#3979a8", display: "flex" }}>{icono}</Box>

        <Typography variant="h6" sx={{ fontWeight: 750 }}>
          {titulo}
        </Typography>
      </Stack>

      <Box
        sx={{
          ml: { xs: 0, sm: 4 },
          p: { xs: 2, sm: 3 },
          bgcolor: "#f7f9fb",
          border: "1px solid #e6ebef",
          borderLeft: "3px solid #7ba9c9",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.9,
            whiteSpace: "pre-line",
            overflowWrap: "anywhere",
          }}
        >
          {contenido || "Sin información registrada"}
        </Typography>
      </Box>
    </Box>
  )
}

export default CustomSection
