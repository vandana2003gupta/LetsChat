import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './components/context/AccountProvider';

function App() {
  const clientId = '1010869800573-jgmdcgm335se25b5pc06trcrpe5evesm.apps.googleusercontent.com'
  return (
    < GoogleOAuthProvider clientId = {clientId}>
      <AccountProvider> 
      <Messenger/>
      </AccountProvider>
    </ GoogleOAuthProvider>
  );
}

export default App;
