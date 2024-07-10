import { Avatar, Chip } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import { fontWeight } from "@mui/system";

export default function ExampleChip() {
    const handleClick = (berk) => {
        console.log('qwfqwfwqfwqfqw', berk)
    }
    const handleDelete = () => {
        console.log('handleDelete')
    }

    return (
        <div >
            <Chip size="small" color="secondary" icon={<FaceIcon />} label="With Icon" />
            <Chip sx={{
                backgroundColor: 'blue',
                '& .MuiAvatar-root': {
                    color: 'red',
                    fontWeight: 600,
                    backgroundColor: 'orange'
                }, '& span': {
                    color: 'orange',
                    fontWeight: 600,
                    fontSize: 16
                }
            }} avatar={<Avatar>M</Avatar>} label="Avatar" />
            <Chip label="link" component={"a"} href="https://google.com" target={"_blank"} />
            <Chip label="link" component={"a"} href="https://google.com" target={"_blank"} clickable />

            <Chip onClick={() => handleClick('berk')} onDelete={handleDelete} sx={{
                backgroundColor: 'red',
                '& .MuiSvgIcon-root': {
                    color: 'blue'
                },
                '& .MuiChip-label': {
                    color: 'white',
                    fontWeight: 600

                }
            }} label="sil" variant="outlined" />
            <Chip onClick={() => handleClick('berk')} deleteIcon={<DeleteIcon />} onDelete={handleDelete} label="sil" variant="outlined" />

            <Chip onClick={() => handleClick('berk')} label="Chip Filled" variant="filled" />
            <Chip onClick={() => handleClick('berk')} label="berk" variant="outlined" color="primary" />

        </div>
    );
}
