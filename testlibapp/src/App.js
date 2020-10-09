import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LanguageProvider,TestControl} from '@mregydev/intllib'

import Local from './anotherControl'
import messages from './en.json'
function App() {
  return (
    <LanguageProvider messages={messages}>
    <TestControl/>
    <Local/>
    </LanguageProvider>
  );
}

export default App;
