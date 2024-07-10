import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default function ExamplePagination() {
    const [page, setPage] = React.useState(0);
    console.log('page', page)
    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Grid item md={4}>
                    <Grid container spacing={2}>
                        {[1, 2, 3, 4].map((data, index) => {
                            return (
                                <Grid key={index} item md={6}>
                                    <MediaCard />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid container justifyContent={"center"} sx={{ mt: 4 }}>
                        <Pagination page={page} onChange={(event, value) => setPage(value)} renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )} showFirstButton showLastButton size='small' shape='rounded' variant='outlined' color="primary" count={10} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
