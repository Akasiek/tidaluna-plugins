export const getStylesWithVars = (styles: string) => {
  const cssVars = [
    { initialColor: "#000000", varName: "--wave-color-opacity-contrast-fill-thick" },
    { initialColor: "#111111", varName: "--wave-color-opacity-contrast-fill-ultra-thick" },
  ];

  cssVars.forEach(({ initialColor, varName }) => {
    const value = getCssVariable(varName) || initialColor;
    styles = styles.replace(new RegExp(initialColor, "g"), value);
  });

  return styles;
};

const getCssVariable = (name: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();