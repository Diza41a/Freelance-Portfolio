import { ButtonBase, useTheme, styled } from '@mui/material';
import { useGlobalContext } from '../contexts/globalContext';
import THEME_OPTIONS, { setCurrentThemeNameInStorage } from '../assets/themes';
import { Moon as NightThemeIcon, SunMedium as DefaultThemeIcon } from 'lucide-react';

export const classNames = {
  root: 'ThemeToggle',
};

const StyledThemeToggle = styled(ButtonBase)(({ theme }) => ({
  color: theme.colors.text.primary[100],
}));

const ThemeToggle = () => {
  const theme = useTheme();
  const {
    themeState: [, setTheme],
  } = useGlobalContext();

  const Icon = theme.name === 'default' ? <NightThemeIcon /> : <DefaultThemeIcon />;

  const onClick = () => {
    const newThemeName = theme.name === 'default' ? 'night' : 'default';
    const newTheme = THEME_OPTIONS.find((theme) => theme.name === newThemeName)?.value;
    if (newTheme) {
      setCurrentThemeNameInStorage(newThemeName);
      setTheme(newTheme);
    }
  };

  return (
    <StyledThemeToggle onClick={onClick} disableRipple className={classNames.root}>
      {Icon}
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
