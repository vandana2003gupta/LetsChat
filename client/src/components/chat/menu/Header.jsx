
import { useContext } from "react";
import {Box} from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const Header = () => {

   const {account} = useContext(AccountContext);
    return(
        <>
          <Box>
              <img src= 'https://static.straitstimes.com.sg/s3fs-public/articles/2020/12/01/af_moneyheist_011220.jpg' alt= "dp"/>
          </Box>
        </>
    )
}

export default Header;