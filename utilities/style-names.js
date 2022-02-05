const styleNames = (styles, classes) => {
  const newArray = [];
  classes.map((themeItem) => {
    if (typeof themeItem === "string" && styles[themeItem])
      newArray.push(styles[themeItem]);
    if (Array.isArray(themeItem)) {
      themeItem.map((arrayThemeItem) => {
        if (styles[arrayThemeItem]) newArray.push(styles[arrayThemeItem]);
      });
    }
    return;
  });
  return newArray.join(" ");
};

export default styleNames;
