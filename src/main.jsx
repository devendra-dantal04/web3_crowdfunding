import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Sepolia } from "@thirdweb-dev/chains"
import { StateContextProvider } from './context/index.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="680ef94f84c0315693e2b64d53200512" // You can get a client id from dashboard settings
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)
