

import { Avatar, Badge, Button } from "@mui/material";
import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';


export default function ExampleBadge() {
    const [value, setValue] = useState(false);
    const handleValue = () => {
        setValue(!value);
    }
    return (
        <div>
            <Badge
                sx={{
                    '& .MuiBadge-badge': {
                        fontSize: 18,
                        color: 'pink',
                        backgroundColor: 'blue',
                        borderRadius: 1,
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} badgeContent={151} max={150} showZero color="success">
                <Avatar />
            </Badge>
            {/* <Button onClick={handleValue}>değiştir</Button>
            <div>
                <Badge badgeContent={151} max={150} showZero color="success">
                    <MailIcon />
                </Badge>
            </div>
            <Badge variant="dot" invisible={value} color="success">
                <MailIcon />
            </Badge> */}
        </div>
    );
}
