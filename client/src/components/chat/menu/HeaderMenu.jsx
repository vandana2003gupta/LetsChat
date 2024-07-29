import { useState, useRef } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const Menuoption = styled(Menu)`
      font-size: 14px;
      padding: 15px 60px 5px 24px;
      color: #4a4a4a;
`
 
const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <MoreVert ref={anchorRef} onClick={handleClick} />
      <Menu
        anchorEl={anchorRef.current}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;