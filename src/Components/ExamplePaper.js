import { BottomNavigation, BottomNavigationAction, Grid, Paper, useMediaQuery } from '@mui/material'
import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ExamplePaper() {
    const [value, setValue] = React.useState(0);
    console.log('value', value)

    return (
        <div>
            <Grid container sx={{ p: 2 }}>
                <Grid container sx={{ mb: 4 }}>
                    <Grid item md={3} sx={12}>
                        <Paper sx={{ borderRadius: "24px", p: 4 }} variant='elevation' elevation={24} >qfqwfwq</Paper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={3} xs={12}>
                        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: "block", sm: "none" } }} elevation={3}>
                            <BottomNavigation
                                sx={{
                                    bgcolor: '#d2d1d1',
                                    '& .Mui-selected svg': {
                                        color: 'red'
                                    }
                                }}
                                showLabels
                                value={value}
                                onChange={(event, newValue) => {
                                    console.log('newValue', newValue)
                                    setValue(newValue);
                                }}
                            >
                                <BottomNavigationAction label="Ana Sayfa" icon={<RestoreIcon />} />
                                <BottomNavigationAction label="Favoriler" icon={<FavoriteIcon />} />
                                <BottomNavigationAction label="Konumlar" icon={<LocationOnIcon />} />
                            </BottomNavigation>
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </div >
    )
}
