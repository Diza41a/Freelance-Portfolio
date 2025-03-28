import SpaceGroteskFont from '../assets/fonts/SpaceGrotesk.ttf';
import WorkSansFont from '../assets/fonts/WorkSans.ttf';

const injectFont = (key: string, path: string) => {
  if (typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.innerHTML = `
    @font-face {
      font-family: '${key}';
      src: url('${path}') format('woff2');
    }
  `;
  document.head.appendChild(style);
};

export const FONTS_DATA = {
  SpaceGrotesk: {
    key: 'SpaceGrotesk',
    path: SpaceGroteskFont,
  },
  WorkSans: {
    key: 'WorkSans',
    path: WorkSansFont,
  },
};

export default injectFont;
