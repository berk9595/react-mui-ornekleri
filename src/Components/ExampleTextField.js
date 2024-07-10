import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";

export default function ExampleTextField() {
  const [text, setText] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTextChange = (event) => {
    console.log("event ? ", event.target.value);
    setText(event.target.value);
  };
  return (
    <div style={{ padding: 16 }}>
      <TextField
        fullWidth
        autoFocus
        sx={{
          "& input::placeholder": {
            opacity: 1,
            color: "orange",
          },
          "& .MuiFilledInput-root:hover": {
            backgroundColor: "red",
          },
          "& .MuiFilledInput-root::before": {
            borderBottom: "unset",
          },
          "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
            {
              borderBottom: "unset",
            },
          "& .MuiFilledInput-root::after": {
            borderBottom: "unset",
          },
        }}
        variant="filled"
        placeholder="isminizi girin"
        value={text}
        onChange={(event) => handleTextChange(event)}
      />

      {/* <TextField variant="outlined" disabled placeholder="placeholder" />
      <TextField
        error={true}
        helperText="blbalbalbal"
        variant="outlined"
        placeholder="placeholder"
      />
      <TextField multiline placeholder="multine" minRows={10} maxRows={11} />
      <TextField
        type={showPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <div onClick={handlePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </div>
            </InputAdornment>
          ),
        }}
      />

      <TextField size="small" />
      <div style={{ width: 500 }}>
        <TextField />
      </div> */}
    </div>
  );
}
