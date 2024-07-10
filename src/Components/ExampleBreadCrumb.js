import { Breadcrumbs, Chip, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
export default function ExampleBreadCrumb() {
    return (
        <div>
            <Breadcrumbs >
                <Chip label="berk" />
                <Chip label="ayvalı" />
                <Typography color="text.primary">Breadcrumbs</Typography>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </div>
    )
}
const MyComponent = () => {
    return (
        <Grid item><AccessibilityNewIcon /></Grid>
    )
}
