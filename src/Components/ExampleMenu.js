import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import React from "react";
import ContentCut from "@mui/icons-material/ContentCut";
import Fade from "@mui/material/Fade";

export default function ExampleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("event.currentTarget", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        Menu Acılsın 2
      </Button>
      <Button onClick={handleClick}>Menu acılsın</Button>
      <Menu
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "unset",
            border: "1px solid #e6e6e6",
          },
          "& .MuiBackdrop-root": {
            background: "#ef40ea57",
          },
          "& .MuiMenuItem-root:nth-child(3)": {
            background: "orange",
          },
          "& svg": {
            color: "blue",
          },
        }}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList dense>
          <MenuItem onClick={handleClose}>
            <ListItemText>Cut</ListItemText>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />

          <MenuItem onClick={handleClose}>My account</MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
