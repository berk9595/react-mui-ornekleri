import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ExampleDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Dialog Aç</Button>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            background: "red",
            borderRadius: 10,
            margin: 0,
          },
          "& .MuiDialogTitle-root": {
            background: "white",
          },
          "& .MuiDialogActions-root": {
            background: "orange",
          },
          "& .MuiDialogTitle-root > p": {
            color: "orange",
          },
        }}
        // fullScreen
        fullWidth={true}
        maxWidth="sm"
        TransitionComponent={Transition}
        open={open}
        onClose={() => {
          console.log("kapanma fonksiyonu cagırıldı");
          handleClose();
        }}
      >
        <DialogTitle>
          <Typography variant="body2">Burası Title olacak</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2">Burası Title olacak</Typography>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} variant="text">
            Çık
          </Button>
          <Button variant="contained">Kaydet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
