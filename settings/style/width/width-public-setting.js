
export function getWidthStyle(setting) {
    const { minWidth, maxWidth, width } = setting;
    const widthStyle = {
        width: `${width}%`,
        minWidth: `${minWidth}vw`,
        maxWidth: `${maxWidth}vw`
    }
    if (!minWidth) {
        delete widthStyle.minWidth;
    }

    if (!maxWidth) {
        delete widthStyle.maxWidth;
    }

    if (!width) {
        delete widthStyle.width;
    }
    return widthStyle;
}
