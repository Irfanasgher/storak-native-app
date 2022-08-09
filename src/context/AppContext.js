import React, {useState, createContext} from 'react';

const AppContext = createContext();

const AppContextProvider = props => {
  // const [user, setUser] = useState({name: '', email: '', token: ''})
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [usertoken, setUsertoken] = useState('');

  // console.log('context ws us', username);
  return (
    <AppContext.Provider
      value={{
        username,
        useremail,
        usertoken,
        setUsername,
        setUseremail,
        setUsertoken,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppContextProvider, AppContext};
