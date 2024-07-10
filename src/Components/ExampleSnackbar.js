import { Avatar, Button, Grid, IconButton, Snackbar, Typography } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';
function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function ExampleSnackbar() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
        </React.Fragment>
    );

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                sx={{
                    '& .MuiPaper-root': {
                        bgcolor: '#58ff824a',
                        border: '2px solid #58ff82',
                        boxShadow: 'unset',
                        borderRadius: '8px'
                    },
                    '& p': {
                        color: 'black',
                        fontWeight: 600
                    },
                    '& .MuiAvatar-root': {
                        width: 40, height: 40,
                    }
                }}
                TransitionComponent={SlideTransition}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                onClose={handleClose}
                message={<Message />}
                action={action}
            />
        </div>
    )
}

const Message = () => {

    return (
        <Grid container>
            <Grid container alignItems={"center"} spacing={1}>
                <Grid item>
                    <Avatar />
                </Grid>
                <Grid item xs>
                    <Typography>Message</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
