import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ExampleTypography() {
    const [open, setOpen] = useState(false);
    function handleChange() {
        setOpen(!open)
    }
    return (
        <div>
            <Button variant={open ? 'outlined' : 'contained'} onClick={handleChange}>değiştir</Button>
            <Typography sx={{
                color: open ? 'blue' : 'red',
                fontWeight: open ? 600 : 400
            }}>
                berk ayvalı
            </Typography>


        </div>
    )
}
