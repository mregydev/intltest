import React from 'react'

import { TestControl, LanguageProvider } from '@mregydev/intllib'
import '@mregydev/intllib/dist/index.css'

const App = () => {
  return <LanguageProvider>
    <TestControl />
  </LanguageProvider>
}

export default App
