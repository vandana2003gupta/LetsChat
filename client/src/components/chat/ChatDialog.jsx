import { Dialog, Box, styled} from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    min-width: 400px;
    width:73%;
    height: 100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`;



const dialogStyle = {
    height: '93%',
    width: '100%',
    boxshadow: 'none',
    overflow: 'hidden',
    maxWidth:'100%',
    borderRadius: '0px',
    padding: '20px',
}



const ChatDialog = () => {
    return (
        <Dialog
           open={true}
           PaperProps={{sx: dialogStyle}}
           hideBackdrop = {true}
           maxWidth = {'md'}
        
        >
        <Component>
            <LeftComponent>
               <Menu/>
            </LeftComponent  >
            <RightComponent>
                <EmptyChat/>
            </RightComponent>
        </Component>
        </Dialog>
        
    )
}

export default ChatDialog;