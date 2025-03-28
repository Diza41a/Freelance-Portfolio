import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { GlobalContext } from './contexts';
import { getCurrentTheme } from './assets/themes';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/MainLayout';
import { ROUTES } from './routes';
import injectFont, { FONTS_DATA } from './utils/fontInjector';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

injectFont(FONTS_DATA.SpaceGrotesk.key, FONTS_DATA.SpaceGrotesk.path);
injectFont(FONTS_DATA.WorkSans.key, FONTS_DATA.WorkSans.path);
injectFont(FONTS_DATA.VT323.key, FONTS_DATA.VT323.path);

const App = () => {
  const currentTheme = getCurrentTheme();
  const [theme, setTheme] = useState(currentTheme);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext
        value={{
          themeState: [theme, setTheme],
        }}
      >
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route element={<MainLayout />}>
                {ROUTES.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Route>
            </Routes>

            <ScrollToTop />
          </Router>

          <CssBaseline />
        </ThemeProvider>
      </GlobalContext>

      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
