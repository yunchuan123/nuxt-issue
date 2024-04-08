import { isFunction } from "lodash-es";

/**
 * 检查方法并执行
 * @param {Function} fn
 * @returns
 */
export function checkFnAndRun(fn, params) {
    return isFunction(fn) && fn(params);
}