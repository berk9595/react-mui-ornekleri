

import { Rating } from "@mui/material";
import React, { useState } from "react";


export default function ExampleRating() {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        console.log('newValue', newValue)
        setValue(newValue)
    }
    return (
        <div>
            <Rating max={10} value={value} onChange={handleChange} size="small" />
            <br />
            <Rating size="large" defaultValue={2.5} precision={0.5} />
            <br />
            <Rating size="medium" disabled />
        </div>
    );
}
