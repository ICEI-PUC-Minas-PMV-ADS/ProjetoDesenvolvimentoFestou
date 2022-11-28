import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(true);
  const [name, setName] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userid, setUserid] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        useremail,
        setUseremail,
        userid,
        setUserid
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, useremail,setUseremail } = context;
  return { signed, setSigned, name, setName, useremail,setUseremail };
}
