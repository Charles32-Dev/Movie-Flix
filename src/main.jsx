import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './Styles/GlobalStyles.js'

import Router from './routes/routes.jsx'

createRoot(document.getElementById('root')).render
  (

    <React.StrictMode>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </React.StrictMode>,

  )
