
import { useContext } from 'react';
import {Box, Typography, styled} from '@mui/material';

import {AccountContext} from "../context/AccountProvider";

const Profile =() => {

    const DescriptionContainer = styled(Box)`
        padding: 18px 22px 22px 30px;
        & > p {
            font-size: 14px;
            color: #8696a0;
        }
    `;

    const ImageContainer = styled(Box)`
          justify-content: center;
          display:flex;

    `;
    const Image = styled('img')({

        height: 150,
        width: 150,
        borderRadius: '50%',
        padding: '25px'

    });

    const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 3px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.08);
    & : first-child{
        color: #6288ef;
        font-size: 13px;
        font-weight: 200;
    }
    & : last-child{
        color: #4A4A4A;
        padding-top: 12px;
    }
    `
    const {account} = useContext(AccountContext);
    return (
        <>
            <ImageContainer>
                <Image src ={account.picture} alt ="dp"/>
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name </Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer >
            <Typography>This is not your username or pin. This name will be visible to your contacts. </Typography>
            </DescriptionContainer >
            <BoxWrapper>
                <Typography>About </Typography>
                <Typography>Hello Everyone! </Typography>
            </BoxWrapper>
        </>
    )
}
export default Profile;
