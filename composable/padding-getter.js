export function getPadding(setting, customStyle = {}) {
  const { containerPadding, containerMargin } = setting;
  return {
    paddingTop: `${containerPadding.paddingTop}px`,
    paddingBottom: `${containerPadding.paddingBottom}px`,
    paddingLeft: `${containerPadding.paddingLeft}px`,
    paddingRight: `${containerPadding.paddingRight}px`,
    marginTop: `${containerMargin.marginTop}px`,
    marginBottom: `${containerMargin.marginBottom}px`,
    marginLeft: `${containerMargin.marginLeft}px`,
    marginRight: `${containerMargin.marginRight}px`,
    ...customStyle
  }
}
