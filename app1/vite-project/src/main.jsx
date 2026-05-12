import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TablePagination from './Pagin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TablePagination />
  </StrictMode>,
)
