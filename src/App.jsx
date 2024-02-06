import { MantineProvider } from '@mantine/core';
import './App.css'
import LandingPage from './LandingPage'

function App() {
  

  return (
    <MantineProvider>
      <LandingPage />
    </MantineProvider>
  
  )
}

export default App
