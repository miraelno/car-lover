import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!user) {
      const token = sessionStorage.getItem('token');
      axios
        .get('api/user/profile', {
          headers: { Authorization: `Token ${token}` },
        })
        .then(({ data }) => {
          setUser(data);
          setReady(true)
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready}}>
      {children}
    </UserContext.Provider>
  );
}
// stopped at 1:37:27 on creating profile endpoint
