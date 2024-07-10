import { Grid, useMediaQuery } from '@mui/material';
import React from 'react'

export default function ExampleUseMediaQuery() {
    const matches = useMediaQuery('(max-width:600px)');
    console.log('matches', matches)
    return (
        <Grid container>
            {matches ? <div>600 ALTINDA </div> : <div>600 ÜSTÜ</div>}
        </Grid>
    )
}
