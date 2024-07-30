import { useState, useRef } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption= styled(MenuItem)`
      font-size: 14px;
      padding: 15px 60px 5px 24px;
      color: #4a4a4a;
`
 
const HeaderMenu = ({setOpenDrawer}) => {
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
        transformOrigin={{
          
          horizontal: 'center',
          vertical: 'right'
        }}
      >
        <MenuOption onClick={() => {handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;