import { defineStore } from "pinia";
import { uniqueId } from "lodash-es";
import EventType from "~/constant/event-type.js"

/**
 * @typedef {Object} EventDetail
 * @property {string} key - The key of the event.
 * @property {Function} fu - The function to execute.
 * @property {string} type - The type of the event.
 */

/**
 * @typedef {Object} EventHandler
 * @property {Function} fn - The function to call when the event occurs.
 * @property {Object.<string, string>} options - The key associated with the event handler.
 * @property {('CUSTOM_RECT'|'CUSTOM_POLYGON')} type - The type of the event.
 */

function isTypeInEventType(type) {
    for (let key in EventType) {
        if (EventType.hasOwnProperty(key) && EventType[key] === type) {
            return true;
        }
    }
    return false;
}

const NAME = "EventCenter";

function getComponentInstanceName(componentName, containerId) {
    return `${componentName}-${containerId}`;
}

export const EventName = {
    REGISTER: "register"
}

const EventSourceType = {
    COMPONENT_EVENT: "componentEvent",
    CUSTOM_EVENT: "customEvent"
}

export const CUSTOM_EVENT_NAME = "customEvent"

export const useEventCenter = defineStore("event-center", {
    /**
     * events对象
     * @returns {{
     *     events: Map<string, Object.<string, EventDetail>>,
     *     listenerMap: Map<string, Function[]>
     * }}
     */
    state: () => {
        return {
            events: new Map(),
            listenerMap: new Map()
        }
    },
    actions: {
        /**
         *
         * @param {string} name
         * @param {string} eventName
         * @param {{fn: Function, options: Object.<string, string>, key: string}} event
         * @private
         */
        _register(name, eventName, event) {
            if (this.events.has(name)) {
                const componentEvents = this.events.get(name);
                componentEvents[eventName] = event;
            } else {
                const componentEvents = {[eventName]: event};
                this.events.set(name, componentEvents);
            }
            this.execute(EventName.REGISTER)
        },
        /**
         *
         * @param {string} componentInstanceName - 组件实例名称
         * @param {{ name: string, key: string, fn: function }} event - 组件事件
         * @param {Object.<string, string>} options - 事件类型
         */
        register(componentInstanceName, event, options) {
            const { type } = options;
            if (!isTypeInEventType(type)) {
                throw new Error(`组件${componentInstanceName}:请选择正确的函数注册类型`)
            }

            const { fn, key } = event;
            const _event = {fn, key, options};
            this._register(componentInstanceName, event.name, _event);
        },
        /**
         * 注册自定义事件
         * @param {string} eventName
         * @param {Function} fn
         */
        registerCustomEvent(eventName, fn) {
            const event = {
                fn,
                key: uniqueId("customEvent"),
                options: {
                    type: EventType.CUSTOM_RECT
                }
            }
            this._register(CUSTOM_EVENT_NAME, eventName, event);
        },
        /**
         * 注册闭包事件
         * @param {string} name
         * @param {Object} setting - props.setting
         * @param {function} fn - 事件闭包
         * @param {Object.<string, string>} options - 类型
         */
        registerEvent(name, setting, fn, options) {
            const { componentName, containerId } = setting;
            const componentInstanceName = getComponentInstanceName(componentName, containerId)
            const key = `event-${uniqueId()}`;
            this.register(componentInstanceName, {name, key, fn}, options)
        },
        /**
         *
         * @returns {Map<string, Object.<string, EventDetail>>}
         */
        getEvents() {
            return this.events;
        },
        clearEventByName(setting) {
            const { componentName, containerId } = setting;
            this.events.delete(getComponentInstanceName(componentName, containerId))
        },
        getEvent(componentInstanceName, eventName) {
            if (!this.events.has(componentInstanceName)) {
                throw new Error(`[${NAME}]: ${componentInstanceName}组件不存在`)
            } else {
                return this.events.get(componentInstanceName)[eventName];
            }
        },
        addListener(name, fn) {
            if (this.listenerMap.has(name)) {
                this.listenerMap.get(name).push(fn);
            } else {
                this.listenerMap.set(name, [fn])
            }
        },
        execute(name) {
            if (this.listenerMap.has(name)) {
                const fnlist = this.listenerMap.get(name);
                fnlist.forEach(fn => fn());
            }
        }
    }
})
