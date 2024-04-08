import {computed} from "vue";
import {assign, concat, isEmpty, isString, omitBy} from "lodash-es";

import { getWidthStyle } from "~/settings/style/width/width-public-setting.js";
import { getBorderStyle } from "~/settings/style/border/border-public-setting.js";
import { getPublicStyle } from "~/settings/style/public-setting/public-settings.js";
import { getFontStyle } from "~/settings/style/font/font-public-setting.js";
import { getAlignItemsStyle } from "~/settings/style/align-items/align-items.js";
import { getObjectFitStyle } from "~/settings/style/object-fit/object-fit-public-setting.js";
import { getMinAndMaxHeightStyle } from "~/settings/style/min-and-max-height/min-and-max-height.js";
import { getFloatStyle } from "~/settings/style/float/float.js";
import { getBackGroundColorStyle } from "~/settings/style/background-color/background-color-setting.js";


/**
 * 各类统一样式的key，
 * @type {{BORDER: string, WIDTH: string, PADDING_MARGIN: string, FONT: string}}
 */
export const StyleKey = {
    WIDTH: "width",
    BORDER: "border",
    FONT: "font",
    PADDING_MARGIN: "padding-margin",
    ALIGN_ITEMS: "align-items",
    OBJECT_FIT: "object-fit",
    HEIGHT: "height",
    FLOAT: "float",
    CHILD_HOVER_EFFECT: "child_hover_effect",
    BACKGROUND_COLOR: "background-color"
}

const styleMapping = {
    [StyleKey.WIDTH]: getWidthStyle,
    [StyleKey.BORDER]: getBorderStyle,
    [StyleKey.FONT]: getFontStyle,
    [StyleKey.PADDING_MARGIN]: getPublicStyle,
    [StyleKey.ALIGN_ITEMS]: getAlignItemsStyle,
    [StyleKey.OBJECT_FIT]: getObjectFitStyle,
    [StyleKey.HEIGHT]: getMinAndMaxHeightStyle,
    [StyleKey.FLOAT]: getFloatStyle,
    [StyleKey.BACKGROUND_COLOR]: getBackGroundColorStyle
}

const defaultStyle = [StyleKey.PADDING_MARGIN];

/**
 * 清洗style数据
 * @param style
 * @returns {{}|{}}
 */
export function pureStyle(style) {
    return omitBy(style, (value) => {
        return isEmpty(value) || (isString(value) && value.includes("undefined"));
    });
}

/**
 * 生成动态style
 * @param setting
 * @param {string[]} styleOptions
 * @param {function} [customStyle]
 * @returns {{style: ComputedRef<any>}}
 */
export function generateComputedStyle(setting, styleOptions, customStyle = () =>{}) {
    const style = computed(() => {
        let _style = assign({}, customStyle());
        concat(styleOptions, defaultStyle).forEach(option => {
            if (Object.hasOwnProperty.call(styleMapping, option)) {
                _style = {
                    ..._style,
                    ...styleMapping[option](setting)
                }
            }
        })
        return pureStyle(_style);
    })
    return {
        style
    }
}

