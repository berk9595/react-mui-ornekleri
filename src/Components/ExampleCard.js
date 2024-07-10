import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ExampleCard() {
    return (
        <div>
            <Grid container>
                {/* <Grid item md={3}>
                    <CardActionArea>
                        <Grid container sx={{ p: 4 }}>
                            qwfqwfqwfqwfqw
                        </Grid>
                    </CardActionArea>
                </Grid> */}
                <Grid item md={3}>
                    <Card sx={{ borderRadius: "24px" }} variant='outlined' >

                        <CardHeader
                            sx={{
                                '& svg': {
                                    color: 'orange'
                                },

                                bgcolor: '#fae2e2',
                                '& .MuiCardHeader-title': {
                                    fontWeight: 600
                                },
                                '& .MuiCardHeader-subheader': {
                                    color: 'red'
                                },
                                '& .MuiCardHeader-avatar': {
                                    marginRight: "8px",
                                },
                                '& .MuiAvatar-root': {
                                    width: 56,
                                    height: 56,
                                }
                            }}
                            avatar={
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://mui.com/static/images/cards/paella.jpg"
                                alt="Paella dish"
                            />  </CardActionArea>

                        <CardContent>
                            <Typography fontWeight={600} variant="h5">Şefin tabağı</Typography>
                            <Typography  >
                                bla bla bl malzemos
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "space-between" }} >
                            <Button size="small">Cancel</Button>
                            <Button variant='contained' size="small">Learn More</Button>

                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
