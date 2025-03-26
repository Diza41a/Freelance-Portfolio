import { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalContext } from './contexts';
import { getCurrentTheme } from './assets/themes';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/MainLayout';
import { ROUTES } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

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
          <CssBaseline />
          <ScrollToTop />

          <Router>
            <Route element={<MainLayout />}>
              {ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Router>
        </ThemeProvider>
      </GlobalContext>

      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
