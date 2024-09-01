import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { authConfig } from './auth';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const msalInstance = new PublicClientApplication(authConfig);

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>
);
