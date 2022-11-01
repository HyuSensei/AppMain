import {AuthProvider} from './APP/context/AuthContext'
import Appnav from './APP/tab/Appnav';
import Navigater from './APP/tab/Navigater';
export default function App() {
  return (
    <AuthProvider>
     <Navigater/>
    </AuthProvider>
    
  );
}


