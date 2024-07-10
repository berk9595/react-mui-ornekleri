import { Avatar, Button, Divider, Grid, MenuItem, MenuList, Popover, Typography } from '@mui/material'
import React from 'react'

export default function ExamplePopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <Grid container >
            <Avatar onClick={handleClick} />

            <Popover

                // slotProps={{ paper: { elevation: 0, variant: "outlined" } }}
                sx={{
                    '& .MuiBackdrop-root': {
                        bgcolor: '#ff66ff21'
                    },
                    '& .MuiPaper-root': {
                        boxShadow: 'unset',
                        border: '1px solid red',
                        // borderRadius: 4,
                        bgcolor: '#d1c9fe'
                    }
                }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuList>
                    <MenuItem>
                        Profilim
                    </MenuItem>
                    <MenuItem>
                        Ayarlar
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        Çıkış Yap
                    </MenuItem>
                </MenuList>
            </Popover>
        </Grid>
    )
}
