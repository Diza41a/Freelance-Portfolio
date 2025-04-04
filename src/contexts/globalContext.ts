import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Theme } from '@mui/material';

export type ThemeStateDispatcher = Dispatch<SetStateAction<Theme>>;
export type ThemeStateProps = [Theme, ThemeStateDispatcher];

interface GlobalContextProps {
  themeState: ThemeStateProps;
  visitedPagesRef: React.RefObject<Map<string, boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  themeState: undefined,
  visitedPagesRef: { current: [] },
} as unknown as GlobalContextProps);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('`useGlobalContext` must be used within a GlobalProvider');
  }

  return context;
};
