
import { ArrowBack } from '@mui/icons-material';
import {Drawer, Typography, Box, styled} from '@mui/material';
import Profile from './Profile';

const Header = styled(Box)`
      background: #6288ef;
      height: 107px;
      color: #FFFFFF;
      display:flex;
      & > svg, & > p {
        margin-top: auto;
        padding: 18px;
        font-weight: 547;

      }
`;

const Text = styled(Typography)`
    font-size:18px;
`

const Component = styled(Box)`
      background: #ededed;
      height: 85%;
`

const drawerStyle = {
    left: 20,
    top : 16,
    height: '94.8%',
    width: '33%',
    boxShadow: 'none'
}

const InfoDrawer = ({open, setOpen}) => {

    const handleClose =() => {
        setOpen(false);
    }
    return (
        <Drawer
            open= {open}
            onClose={handleClose}
            PaperProps={{sx: drawerStyle}}
            style={{zIndex: 1500}}
        
        >
            <Header>
                <ArrowBack onClick = {() => setOpen(false)}/>
                <Text> Profile</Text>
            </Header>
            <Component>
                <Profile/>
            </Component>

        </Drawer>
    )
}
export default InfoDrawer;