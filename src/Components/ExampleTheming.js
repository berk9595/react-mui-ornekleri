import { Button, Checkbox, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

export default function ExampleTheming() {
    const theme = useTheme();
    const myTypo = theme.typography.h1;
    console.log('myTypo', myTypo)

    return (
        <Grid container>
            <Grid container>
                <Button color='primary' variant='contained'>Primary</Button>
                <Button color='secondary' variant='contained'>Secondary</Button>
            </Grid>
            <Checkbox defaultChecked={true} />
            <Checkbox color='secondary' defaultChecked={true} />
            <Typography color="primary" >Primary color text</Typography>
            <Typography variant='h1' color="secondary" sx={{ fontFamily: 'Inter', fontWeight: 600 }} >secondary color text</Typography>
            <Typography variant='body1' color="primary" sx={{ fontWeight: 500, fontFamily: 'Inter' }} >body1 color text</Typography>
            <Grid container sx={{ mt: 8, bgcolor: '#f6f6f6', p: 4 }}>
                <div style={{ ...myTypo, color: theme.palette.primary.main }}>Berk Ayvalı</div>
            </Grid>
        </Grid>
    )
}
