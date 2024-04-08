import {isEmpty} from "lodash-es";

export function getBorderStyle(setting) {
    const { borderWidth, borderColor, borderStyle, borderRadius } = setting;
    let hiddenBorders = {};
    if (!isEmpty(setting.borderShow)) {
        (setting.borderShow || []).forEach(key => {
            hiddenBorders[`border-${key}`] = "none";
        })
    }
    if (!borderWidth) {
        return {};
    }
    return {
        borderWidth: `${borderWidth}px`,
        borderColor: `${borderColor}`,
        borderStyle: `${borderStyle}`,
        borderRadius: `${borderRadius}px`,
        ...hiddenBorders
    }
}
