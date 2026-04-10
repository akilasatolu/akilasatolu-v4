import { AppRouter } from "./router/AppRouter";
import { CmnHeader } from "./pages/cmn/CmnHeader";
import { CmnFooter } from "./pages/cmn/CmnFooter";
import './assets/styles/theme.css';
import './assets/styles/App.css';

export const App = () => {
  return (
    <div className="w-full h-full flex justify-start flex-col">
      <CmnHeader />
      {/* routing */}
      <AppRouter />
      <CmnFooter />
    </div>
  )
};