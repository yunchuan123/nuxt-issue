import {isArray, isString, isObject } from "lodash-es";

function isPromise(value) {
    return Boolean(value && typeof value.then === 'function' && value[Symbol.toStringTag] === 'Promise');
}

/**
 * 构建事件实例，封装事件调用逻辑线
 */
export default class EventPipeline {

    fnList = [];
    constructor(event, eventStore, setting) {
        if (isString(event)) {
            try {
                const fn = new Function("params", event);
                const fnObj = { fn: (params) => fn(params) }
                this.fnList.push(fnObj)
            } catch (e) {
                debugger;
                throw new Error(`[${setting.containerId}]: 组件内部有错误的函数`)
            }
        }
        if (isArray(event)) {
            this.fnList = this.processEventArray(event, eventStore)
        }
    }

    processEventArray(event, eventStore) {
        const fnList = [];
        isArray(event) && event.forEach(event => {
            if (isObject(event)) {
                let fnObj = {};
                const { data, right, left } = event;
                if (data.fn && data.containerId === "customEvent") {
                    fnObj.fn = new Function("params", "axiosInstance", data.fn);
                } else {
                    const { containerId, eventName } = data;
                    fnObj.fn = params => eventStore.getEvent(containerId, eventName)?.fn(params);
                }
                if (right) { fnObj.right = this.processEventArray(right, eventStore); }
                if (left) { fnObj.left = this.processEventArray(left, eventStore); }
                fnList.push(fnObj);
            }
        })
        return fnList;
    }

    execute(params) {
        this.run(this.fnList, params);
    }

    run(fnList, result) {
        if (!fnList) return;
        for (let i = 0; i < fnList.length; i++) {
            let fnObj = fnList[i];
            result = fnObj.fn?.(result)
            if (fnObj.right || fnObj.left) {
                // 兼容处理promise格式的返回值
                Promise.resolve(result).then((_result) => {
                    if (result && result.success) {
                        this.run(fnObj.right, result);
                    } else {
                        this.run(fnObj.left, result);
                    }
                })
            }
        }
    }
}
