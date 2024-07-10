

import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";


export default function ExampleSwitch() {
    const [value, setValue] = useState(false);
    const handleChange = (event) => {
        console.log('handleChange', event.target.checked)
        setValue(event.target.checked)
    }
    return (
        <div>
            <Switch sx={{
                background: 'blue',
                borderRadius: 2,
                '& .MuiSwitch-switchBase': {
                    color: 'red'
                },
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'orange'
                },
                '& .MuiSwitch-track': {
                    backgroundColor: 'pink'
                },
                '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                    backgroundColor: 'red'
                }
            }} checked={value} onChange={(event) => handleChange(event)} />
            {/* <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="BERK AYVALI"
                labelPlacement="end"
            /> */}
            {/* <Switch color="secondary" size="medium" defaultChecked />
            <Switch color="success" size="small" defaultChecked />
            <Switch disabled />
            <Switch defaultChecked disabled />
            <FormControlLabel control={<Switch defaultChecked />} label="Sistem bana mail atsın" />
            <FormControlLabel control={<Switch defaultChecked />} label="Bildirimleri aktif et" /> */}

        </div>
    );
}
