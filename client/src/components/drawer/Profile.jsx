
import { useContext } from 'react';
import {Box, styled} from '@mui/material';

import {AccountContext} from "../context/AccountProvider";

const ImageContainer =  styled(Box)`
    display: flex;
    jutify-content: center;
`

const Profile =() => {

    const {account} = useContext(AccountContext);
    return (
        <>
            <ImageContainer>
                <img src ={account.picture} alt ="dp"/>
            </ImageContainer>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </>
    )
}
export default Profile;
