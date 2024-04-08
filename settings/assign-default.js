import { isNumber } from "lodash-es";

/**
 * 如果值不存在的话，则设置默认值
 * @param value
 * @param defaultValue
 * @returns {*}
 */
export function assignDefault(value, defaultValue) {
    if (!value && !isNumber(value)) {
        return defaultValue
    }
    return value
}