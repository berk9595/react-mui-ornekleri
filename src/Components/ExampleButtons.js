import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import React from "react";

export default function ExampleButtons() {
  const handleAlert = (data) => {
    let berk = "merhaba " + data;
    alert(berk);
  };
  return (
    <div style={{ padding: 16, width: 300 }}>
      <Button
        startIcon={<DeleteIcon />}
        size="small"
        sx={{
          "& label": {
            color: "purple",
          },
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "orange",
          },
          "& svg": {
            color: "orange",
          },
        }}
        onClick={() => handleAlert("selam")}
        variant="contained"
      >
        <label>tıkla</label>
      </Button>
    </div>
  );
}
