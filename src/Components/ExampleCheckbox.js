
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import React, { useState } from "react";


export default function ExampleCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        console.log('BURASI', !checked)
        setChecked(!checked)
    }
    return (
        <div>
            <Checkbox
                sx={{
                    padding: 0,
                    color: 'red',
                    '&.Mui-checked': {
                        color: 'orange'
                    }
                }}
                checked={checked}
                onChange={handleChange}

            />
            {checked ? <div>MESELA BURASININ GÖZÜKÜP ACILMASINI İSTER</div> : <div>CHECKED FALSE İSE BURAYA GİRECEK</div>}
            {checked && <div>SELAM</div>}
            <FormControl sx={{
                "& .MuiFormControlLabel-label": {
                    color: 'blue'
                }
            }} component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="BERK"
                        labelPlacement="end"
                    />

                </FormGroup>
            </FormControl>

            {/* <FavoriteBorder />
            <Favorite />
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            <Checkbox size="small" color="primary" />
            <Checkbox size="medium" color="secondary" />
            <Checkbox size="large" color="error" />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup> */}
        </div>
    );
}
