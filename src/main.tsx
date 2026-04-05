import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { SetAllData } from './utils/SetAllData.tsx';
import { SetUserSettingInit } from './utils/SetUserSettingInit.tsx';
import { SetLanguage } from './utils/SetLanguage.tsx';
// import App from './App.tsx'
import { App } from './App_.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <SetUserSettingInit />
      <SetLanguage />
      <SetAllData />
    </BrowserRouter>
  </StrictMode>,
);

// Prevent zooming
(() => {
  document.body.addEventListener(
    "touchmove",
    (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
})();
