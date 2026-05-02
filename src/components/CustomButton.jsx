import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({color, text, variant, ...props}) => {
    return <Button 
            sx={{
              color: color,
              border: `1.5px solid ${color}`,
              borderRadius: "6px",
              padding: "5px 12px",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            {...props}
            >
              {text}
            </Button>
}

export default CustomButton
