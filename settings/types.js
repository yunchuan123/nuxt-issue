/**
 * @typedef {Object} RadioOptions
 * @property {string} label
 * @property {string} size
 * @property {string} value
 */

/**
 * @typedef {Object} Field
 * @property {string} name - 字段的展示名称。
 * @property {'input'|'radio'|'color'|'select'|'dataSource', 'event'} type - 字段的类型。
 * @property {string} field - 字段的标识名。
 * @property {string} defaultValue - 字段的默认值。
 * @property {RadioOptions[]} [options] - 使用radio组件时，定义的字段
 * @property {function} changeFn - 组件发生改变时的回调
 */

/**
 * 描述页面中字段的结构和渲染方法。
 * @typedef {Object} FieldStructure
 * @property {Field[]} fields - 定义页面中的字段数组。
 * @property {Function} [renderFn] - 页面字段的渲染函数。
 */

/**
 * @typedef {Object} Setting
 * @property {Object.<string, string>} setting - 字符串
 * @property {function} [renderFn] - 渲染函数
 * @property {function} [_generateChildNode] - 不可自定义，由container用户组件生成
 */

/**
 * 描述options
 * @typedef {Object} ComponentOptions
 * @property {Field[]} fields - 定义页面中的字段数组。
 * @property {Function} [renderFn] - 页面字段的渲染函数。
 */