export const scalePadding = (padding: string | number, scaleFactor: number | 'mobile'): string => {
  const scaleFactorValue = (() => {
    if (scaleFactor === 'mobile') {
      return 0.875;
    }

    return scaleFactor;
  })();

  if (typeof padding === 'number') return `${padding * scaleFactorValue}px`;

  const paddingValues = padding.split(' ').map((value) => value);
  const paddingValuesWithUnits = paddingValues.map((value) => {
    const match = value.toString().match(/([0-9.]+)([a-zA-Z%]+)/);
    if (!match) throw new Error('Invalid padding format');

    const [, num, unit] = match as RegExpMatchArray;
    return {
      value: parseFloat(num),
      unit,
    };
  });
  const scaledPaddingValues = paddingValuesWithUnits.map(({ value, unit }) => {
    const scaledValue = value * scaleFactorValue;
    return `${scaledValue}${unit}`;
  });
  const scaledPadding = scaledPaddingValues.join(' ');

  return scaledPadding;
};

export const scaleFontSize = (
  fontSize: string | number,
  scaleFactor: number | 'mobile',
): string => {
  const scaleFactorValue = (() => {
    if (scaleFactor === 'mobile') {
      return 0.875;
    }

    return scaleFactor;
  })();

  if (typeof fontSize === 'number') return `${fontSize * scaleFactorValue}px`;

  const match = fontSize.match(/([0-9.]+)([a-zA-Z%]+)/);

  if (!match) throw new Error('Invalid font size format');
  const [, fontSizeValueStr, fontSizeUnit] = match;
  const fontSizeValue = parseFloat(fontSizeValueStr);
  const scaledFontSize = fontSizeValue * scaleFactorValue;
  return `${scaledFontSize}${fontSizeUnit}`;
};
