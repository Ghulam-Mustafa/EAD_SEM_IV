import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Components/Timer.jsx'
import Hobby from './Components/StateProps.jsx'
import ReactForm from './Components/RForm.jsx'
import PasswordStrengthChecker from './Components/PwdStrength.jsx'
import RouterComp from './Components/File1.jsx'
import TablePagination from './Components/Pagination.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Hobby />
    <ReactForm />
    <RouterComp />
    <PasswordStrengthChecker />
    <TablePagination/>
  </StrictMode>,
)
