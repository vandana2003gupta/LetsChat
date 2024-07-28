
import {MoreVert} from '@mui/icons-material';
import { useState } from 'react';
import {Menu, MenuItem} from '@mui/material';



const HeaderMenu = () => {

    const[open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    }
    const handleClick = () =>{
        setOpen(true);
    }



    return (
      <>
        <MoreVert onClick = {handleClick} />
        <Menu
          anchorEl={open}
          keepMounted
          open={open}
          onClose={handleClose}
          getContentAnchorE1={null}
          anchorOrigin={{
            vertical: 'bottom',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
}

export default HeaderMenu;