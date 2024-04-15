import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      const token = sessionStorage.getItem('token');
      axios
        .get('api/user/profile', {
          headers: { Authorization: `Token ${token}` },
        })
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
// stopped at 1:37:27 on creating profile endpoint
