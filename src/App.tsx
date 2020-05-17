import React from 'react';
import AuthContext from './context/AuthContext';
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{name: "Matheus"}}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
