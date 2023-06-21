import { ThemeProvider } from '@mui/material'
import React from 'react'
import { myCustomtheme } from './theme'
import RouterLinks from './routes/routes'
import AccessModal from './components/Access/AccessModal'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { ModalProvider } from './contexts/ModalContext'

const App = () => {
  return (
    <ThemeProvider theme={myCustomtheme}>
      <AuthProvider >
        <ModalProvider>
          <RouterLinks
          />
          <AccessModal />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App
