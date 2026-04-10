import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { SetAllData } from './utils/SetAllData.tsx';
import { SetUserSettingInit } from './utils/SetUserSettingInit.tsx';
import { SetLanguage } from './utils/SetLanguage.tsx';
import { SetThemeColor } from "./utils/SetThemeColor.tsx";
import { SetModeColor } from "./utils/SetModeColor.tsx";
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <SetUserSettingInit />
      <SetLanguage />
      <SetModeColor />
      <SetThemeColor />
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
