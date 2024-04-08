export function getFontStyle(setting) {
    const fontStyle = {
        color: setting.color,
        textAlign: setting.textAlignType,
        fontWeight: setting.fontWeight,
        fontFamily: setting.fontFamily
    }
    if (setting.fontSize !== "none") {
        fontStyle.fontSize = setting.fontSize
    }
    return fontStyle
}
