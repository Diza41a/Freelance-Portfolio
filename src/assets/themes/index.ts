import defaultTheme from './defaultTheme';
import nightTheme from './nightTheme';

const THEME_OPTIONS = [
  {
    name: 'default',
    value: defaultTheme,
  },
  {
    name: 'night',
    value: nightTheme,
  },
];

export const setCurrentThemeNameInStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
};

export const getCurrentThemeName = () => {
  const currentThemeName = localStorage.getItem('theme') || 'default';

  return currentThemeName;
};

export const getCurrentTheme = () => {
  const currentThemeName = getCurrentThemeName();
  const currentTheme = THEME_OPTIONS.find((theme) => theme.name === currentThemeName);
  return currentTheme?.value || defaultTheme;
};

export const getThemeByName = (themeName: string) => {
  const theme = THEME_OPTIONS.find((theme) => theme.name === themeName);
  return theme?.value || defaultTheme;
};

export default THEME_OPTIONS;
