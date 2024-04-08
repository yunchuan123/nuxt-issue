export function isAuto(str) {
  return str === "auto"
}

export function addSuffix(str) {
  if (isAuto(str)) {
    return str
  } else {
    return `${str}vw`
  }

}

export function getPublicStyle(setting) {
  const { containerPadding, containerMargin, position, left, top, zIndex } = setting;
  const style = {
    paddingTop: addSuffix(containerPadding.paddingTop),
    paddingBottom: addSuffix(containerPadding.paddingBottom),
    paddingLeft: addSuffix(containerPadding.paddingLeft),
    paddingRight: addSuffix(containerPadding.paddingRight),
    marginTop: addSuffix(containerMargin.marginTop),
    marginBottom: addSuffix(containerMargin.marginBottom),
    marginLeft: addSuffix(containerMargin.marginLeft),
    marginRight: addSuffix(containerMargin.marginRight),
    position: `${position}`,
    left: `${left}%`,
    top: `${top}%`,
    zIndex: `${zIndex}`
  }

  if (!zIndex) delete style.zIndex;
  if (position === "static") {
    delete style.position;
    delete style.left;
    delete style.top;
  }

  Object.keys(containerPadding).forEach(key => {
    if (!containerPadding[key]) delete style[key]
  });

  Object.keys(containerMargin).forEach(key => {
    if (!containerMargin[key]) delete style[key]
  })

  return style;
}
