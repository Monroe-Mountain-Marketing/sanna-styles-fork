import AppRoutes from "@/routes";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SafeArea } from 'capacitor-plugin-safe-area';
import SEOManager from '@/components/SEOManager';

import "@/App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    (async function(){
        const safeAreaData = await SafeArea.getSafeAreaInsets();
        const {insets} = safeAreaData;
        for (const [key, value] of Object.entries(insets)) {
            document.documentElement.style.setProperty(
                `--safe-area-inset-${key}`,
                `${value}px`,
            );
        }
    })()
}, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <>
      <SEOManager />
      <AppRoutes />
    </>
  );
}

export default App;
