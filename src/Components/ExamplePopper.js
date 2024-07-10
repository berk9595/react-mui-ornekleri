import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Avatar, Button, Grid, Typography } from '@mui/material';

export default function ExamplePopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Button variant='contained' onClick={handleClick}>aç</Button>
            <Popper sx={{
                '& .MuiGrid-root': {
                    bgcolor: '#f6f6f6',
                    p: 2,
                    borderRadius: 2,
                },
                '& .MuiAvatar-root': {
                    bgcolor: 'pink',
                    mr: 2,
                },
                bgcolor: 'red', p: '24px 64px', borderRadius: 4, border: '4px solid blue'
            }} id={id} placement="bottom-start" open={open} anchorEl={anchorEl}>
                <Grid container alignItems={"center"}>
                    <Avatar />
                    <Typography>Berk Ayvalı</Typography>
                </Grid>
            </Popper>
        </div>
    );
}