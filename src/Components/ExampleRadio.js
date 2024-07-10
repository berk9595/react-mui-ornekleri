

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";


export default function ExampleRadio() {
    const [value, setValue] = useState("a")
    const handleChange = (myValue) => {
        setValue(myValue);
    }
    return (
        <div>
            <Radio sx={{
                "&": {
                    color: 'pink',
                    padding: 0,
                },
                "& .MuiSvgIcon-root": {
                    fontSize: "64px",
                },
                "&.Mui-checked": {
                    color: 'purple'
                }
            }} />

            <Radio icon={<Favorite />} checkedIcon={<FavoriteBorder />} size="small" color="primary" />
            <Radio size="small" color="secondary" />
            <Radio size="medium" color="error" />


            <div onClick={() => handleChange("a")} style={{ cursor: 'pointer', padding: 16, borderRadius: 8, border: '1px solid red', marginBottom: 4 }} >
                <Radio
                    checked={value === "a"}

                    value="a"

                />
                <span>CEVAP : A</span>
            </div>
            <div onClick={() => handleChange("b")} style={{ padding: 16, borderRadius: 8, border: '1px solid red', marginBottom: 4 }} >
                <Radio
                    checked={value === "b"}

                    value="b"

                />
                <span>CEVAP: B</span>
            </div>
            <div onClick={() => handleChange("c")} style={{ padding: 16, borderRadius: 8, border: '1px solid red', marginBottom: 4 }} >
                <Radio
                    checked={value === "c"}

                    value="c"

                />
                <span>CEVAP: C</span>
            </div>



        </div>
    );
}
