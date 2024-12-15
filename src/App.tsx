
import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import TableBasic from './components/TableBasic'
import { dark } from '@mui/material/styles/createPalette'

function App() {
const darkTheme=createTheme({
  palette:{
    mode:"dark"
  }
})

  return (
    <ThemeProvider theme={darkTheme}>
     <TableBasic/>
    </ThemeProvider>
  )
}

export default App
