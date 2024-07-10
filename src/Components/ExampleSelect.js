import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ExampleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      value
    );
  };
  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Select
          sx={{
            "& .MuiOutlinedInput-input:focus": {
              borderRadius: 50,
            },
            "&": {
              color: "orange",
            },
            "& .MuiSelect-select": {
              backgroundColor: "blue",
              borderRadius: 50,
            },
            "& fieldset": {
              borderRadius: 50,
            },
          }}
          MenuProps={{
            sx: {
              "& .MuiPaper-root": {
                background: "orange",
              },
              "& .MuiBackdrop-root": {
                background: "#00000080",
              },
            },
          }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => {
            console.log("selected", selected);
            return selected?.length > 0 ? (
              <div sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((s) => {
                  return (
                    <span
                      style={{
                        background: "red",
                        padding: "4px 8px",
                        borderRadius: 8,
                        marginRight: 4,
                      }}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div>BURASI BENIM PLACEHOLDERIM</div>
            );
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
