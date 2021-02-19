import React from 'react';

import Header from './components/Head';
import Main from './components/Main';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Header />
    <Main />
    <GlobalStyle />
  </>
);

export default App;
