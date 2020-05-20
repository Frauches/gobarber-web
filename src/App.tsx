import React from 'react';
import AppProvider from './context/index';
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';
import Routes from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};
export default App;
