import React from 'react';
import AppProvider from './context/index';
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};
export default App;
