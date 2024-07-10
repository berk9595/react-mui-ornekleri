import { Avatar, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ExampleGrid() {
    return (
        <div id="grid-ex" style={{ padding: 24, maxWidth: 500 }}>

            <Grid container alignItems={"center"} spacing={2} sx={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px', p: 2, borderRadius: "4px" }}>
                <Grid item sx={{
                    '& img': {
                        width: "128px",
                        height: "90px",
                        borderRadius: 10
                    }
                }}>
                    <img src={"https://mui.com/static/images/grid/complex.jpg"} />
                </Grid>
                <Grid item xs>
                    <Grid container sx={{ mb: 1 }} justifyContent={"space-between"}>
                        <Typography variant="subtitle1" >Standard license</Typography>
                        <Typography variant="subtitle1" >$19.00</Typography>
                    </Grid>
                    <Grid container sx={{ mb: 1 }}>
                        <Typography variant="body2" >Full resolution 1920x1080 • JPEG</Typography>
                    </Grid>
                    <Grid container>
                        <Typography color={"#00000099"} variant="body2" >ID: 1030114</Typography>

                    </Grid>
                    <Grid container sx={{ pt: 2 }}>
                        <Typography ariant="body2" sx={{ cursor: 'pointer' }}>Remove</Typography>
                    </Grid>

                </Grid>


            </Grid>
            <Grid container sx={{
                mt: 2, '& .MuiButton-root': {
                    color: 'red',
                    borderColor: 'orange', padding: 4
                }
            }}>
                <Button variant="outlined" >qwfqwfwq</Button>
            </Grid>
        </div >
    )
}
