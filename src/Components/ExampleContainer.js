import { Checkbox, Container, Grid } from '@mui/material'
import React from 'react'

export default function ExampleContainer() {
    return (

        <Grid container sx={{ mt: 24 }}>
            <Container sx={{ bgcolor: 'red', borderRadius: 8 }} disableGutters component="section" maxWidth={"xs"}>
                <Checkbox></Checkbox>
            </Container>
        </Grid>
    )
}
