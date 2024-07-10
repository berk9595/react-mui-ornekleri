import { CircularProgress, Grid, LinearProgress } from '@mui/material'
import React from 'react'

export default function ExampleProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            {/* <CircularProgress color='secondary' /> */}
            <CircularProgress sx={{
                '& svg': {
                    color: 'orange'
                },
                bgcolor: 'red',
                borderRadius: 4,
                p: 2
            }} size={120} variant='determinate' value={75} color='success' />
            <CircularProgress variant='determinate' value={50} color='success' />
            <CircularProgress variant='determinate' value={33} color='success' />
            {/* <CircularProgress color='success' /> */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item md={4}>
                    <LinearProgress sx={{
                        bgcolor: 'red',
                        height: "20px",
                        borderRadius: "12px",
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'pink',
                            borderRadius: "32px",
                        }
                    }} variant="determinate" value={50} />

                </Grid>



            </Grid>
        </div>
    )
}
