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

export default injectFont;
