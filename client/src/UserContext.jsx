import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    if(!user){
        axios.get('/profile')
    }
  },[])
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}
// stopped at 1:37:27 on creating profile endpoint