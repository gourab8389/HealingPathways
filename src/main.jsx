import React from 'react'

import ReactDOM from "react-dom/client"

import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App"
import "./index.css"

import {PrivyProvider} from '@privy-io/react-auth';
import { StateContextProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <PrivyProvider
      appId="clzyaqmdg01g5eu50owabyofj"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          
        },
      }}
    >
        <Router>
          <StateContextProvider>
            <App/>
          </StateContextProvider>
        </Router>
    </PrivyProvider>
)
