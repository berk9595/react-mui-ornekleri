import { Box, Button, Divider } from '@mui/material'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

import React from 'react'

export default function ExampleDivider() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',

                    borderRadius: 1,
                    bgcolor: 'background.paper',

                }}
            >
                <FormatAlignLeftIcon />
                <Divider sx={{ mx: 4, border: '10px solid red', borderRadius: "16px" }} orientation="vertical" flexItem />
                <FormatAlignLeftIcon />
            </Box>
            <Divider sx={{
                '& .MuiDivider-wrapper': {
                    px: "40px"
                },
                '& button': {
                    color: 'red'
                }
            }}>
                <Button variant='contained' >qwf</Button>
            </Divider>
        </div>
    )
}
