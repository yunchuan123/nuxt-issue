export function getBorderStyle(setting, customStyle = {}) {
    const { borderWidth, borderColor, borderStyle, borderRadius } = setting;
    return {
        borderWidth: `${borderWidth}px`,
        borderColor: `${borderColor}`,
        borderStyle: `${borderStyle}`,
        borderRadius: `${borderRadius}px`,
        ...customStyle
    }
}
