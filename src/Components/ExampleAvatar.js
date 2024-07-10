

import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { Favorite } from "@mui/icons-material";


export default function ExampleAvatar() {

    return (
        <div>
            <Avatar sx={{
                backgroundColor: 'red',
                width: 180, height: 120,
                borderRadius: 20,
                '& .MuiSvgIcon-root': {
                    fontSize: "4rem",
                    color: 'blue'
                }
            }} component={"a"} target="_blank" href="https://google.com" variant="square" >
                <Favorite />
            </Avatar>
            <Avatar variant="rounded" >
                <Favorite />
            </Avatar>
            <Avatar variant="circular" >
                <Favorite />
            </Avatar>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/ads-in-house/scaffoldhub.png" />

            <Avatar alt="Remy Sharp" sx={{ width: 128, height: 128, '& img': { width: '90%', height: '90%', objectFit: 'contain' } }} src="https://mui.com/static/ads-in-house/scaffoldhub.png" />
            <Avatar alt="Remy Sharp">BA</Avatar>

            <AvatarGroup max={3} total={1000}>
                <Avatar alt="Remy Sharp" />
                <Avatar alt="Travis Howard" />
                <Avatar alt="Cindy Baker" />
                <Avatar alt="Agnes Walker" />
                <Avatar alt="Trevor Henderson" />
            </AvatarGroup>


        </div>
    );
}
