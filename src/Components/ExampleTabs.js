import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Grid } from '@mui/material';


export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container>
            <Grid container>
                <Tabs sx={{
                    '& .MuiTabs-indicator': {
                        height: 8,
                        borderRadius: 8,
                        bgcolor: 'red'
                    },
                    '& .MuiTab-root': {
                        color: 'red',
                        bgcolor: 'pink'
                    },
                    '& .MuiTab-root.Mui-selected': {
                        color: 'blue',
                        bgcolor: '#00000050',
                        textDecoration: 'underline'
                    },

                }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Grid>
            <Grid container sx={{ mt: 4 }}>
                <Tabs sx={{
                    '& .MuiTab-root.Mui-selected svg': {
                        color: 'red'
                    }
                }} value={value} onChange={handleChange} aria-label="icon tabs example">
                    <Tab iconPosition="top" icon={<PhoneIcon />} />
                    <Tab icon={<FavoriteIcon />} />
                    <Tab icon={<PersonPinIcon />} />
                </Tabs>
            </Grid>
            <Grid container sx={{ mt: 4 }}>
                <Tabs sx={{
                    '& .MuiTab-root.Mui-selected svg': {
                        color: 'red'
                    },
                    '& .MuiTab-root.Mui-selected': {
                        color: 'orange'
                    }
                }} value={value} onChange={handleChange} aria-label="icon tabs example">
                    <Tab iconPosition="top" icon={<PhoneIcon />} label="RECENTS" aria-label="phone" />
                    <Tab icon={<FavoriteIcon />} label="RECENTS" aria-label="favorite" />
                    <Tab icon={<PersonPinIcon />} label="RECENTS" aria-label="person" />
                </Tabs>
            </Grid>
        </Grid>
    );
}