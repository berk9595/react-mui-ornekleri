import { Button, Grid, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ExampleSkeleton() {
    const [loading, setLoading] = useState(false);
    const handleLoading = () => {
        setLoading(!loading);
    }
    return (
        <div>
            <Grid container sx={{ mb: 2 }}>
                <Button variant="contained" onClick={handleLoading}>{loading ? "Silinsin" : "Yüklensin"}</Button>
            </Grid>
            <Grid container>
                {loading === false && <Grid item md={4}>
                    <Grid container sx={{ border: '1px solid #e3e3e3', p: 2, borderRadius: 4, }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Skeleton animation="wave" variant='circular' width={40} height={40} />
                            </Grid>
                            <Grid item xs>
                                <Skeleton variant='rounded' width={"100%"} height={20} />
                            </Grid>
                            <Grid item xs={12}>
                                <Skeleton variant="rounded" width={"100%"} height={80} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent={"space-between"} >
                                    <Grid item md={6}>
                                        <Skeleton variant="rounded" width={"100%"} height={20} />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Skeleton variant="rounded" width={"100%"} height={20} />
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>


                    </Grid>
                </Grid>}
                {
                    loading === true && <Grid item md={4}>
                        <Grid container sx={{ border: '1px solid #e3e3e3', p: 2, borderRadius: 4, }}>
                            <Typography>BERK AYVALI</Typography>
                        </Grid>
                    </Grid>
                }

            </Grid>


        </div>
    )
}
