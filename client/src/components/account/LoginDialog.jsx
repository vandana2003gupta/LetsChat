
import { useContext } from "react";
import {Dialog, Box, Typography, ListItem, List, styled} from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { AccountContext } from "../context/AccountProvider";
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const Component = styled(Box)`
    display: flex;
    display: between;
    margin:0px 0px 90px 0px;
`;

const Container = styled(Box)`
    padding: 64px 0px 60px 0px;
    color: #525252;
    margin:0px 0px 60px 0px;
    
`;

const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin:'50px 60px 70px 40px',
});

const Title = styled(Typography)`
    font-size: 18px;
    margin-top:25px;
    color: #4a4a4a;
    margin-left: 15px;
`;

const Titles = styled(Typography)`
    font-size: 22px;
    margin-bottom: 45px;
    margin-top: 7px;
    color: #2a2a2a;
`;

const StyledList = styled(List)`
    & > li {
        font-size: 15px;
        color: #4a4a4a;
    }
`;




const dialogStyle = {
    height: '100%',
    marginTop: '12%',
    width:'80%',
    maxheight: '100%',
    maxwidth: 'false',
    boxshadow: 'none',
    overflow: 'hidden',
    padding: '10px 190px 50px 80px'

}

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
    }

    const onLoginError = (res) => {
        console.log('Login Failed',res);
    }


    return(
        <Dialog 
          open={true}
          PaperProps={{sx: dialogStyle}}
          hideBackdrop = {true}
        >

            <Component>
                <Container>
                <Titles> Hey! This a Desktop Clone "LetsChat" </Titles>
                    <Title> To Use LetsChat on your Computer: </Title>
                    <StyledList>
                        <ListItem> 1. Open LetsChat on your phone </ListItem>
                        <ListItem> 2. Tap Settings and select Linked Devices </ListItem>
                        <ListItem> 3. Point your phones to this screen to capture the code </ListItem>
                    </StyledList>

                </Container>
                <Box style = {{position: 'relative'}}>
                    <QRCode src= {qrCodeImage} alt="qr code"/>
                    <Box style ={{position: 'absolute' , top: '42%', transform: 'translateX(18%)'}}>
                        <GoogleLogin
                           onSuccess = {onLoginSuccess}
                           onError = {onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;