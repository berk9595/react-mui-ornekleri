import { Button, Tooltip, Typography, Zoom } from '@mui/material'
import React from 'react'

export default function ExampleTooltip() {
    const handleTrigger = () => {
        console.log('handleTrigger YANİ BUTONUN ÜSTÜNE GİTTİĞİNDE BU FONKSİYON CALISTI')
    }
    return (
        <div style={{ padding: 24 }}>
            <Tooltip
                onOpen={handleTrigger}
                TransitionComponent={Zoom}
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -14],
                                },
                            },
                        ],
                    },
                }}
                arrow placement='top-end' title="Tıkla">
                <Button variant="contained">
                    Tıkla
                </Button>
            </Tooltip>
        </div>
    )
}
