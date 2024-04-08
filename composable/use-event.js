import {useEventCenter} from "~/stores/use-event-center.js";
import {isObject} from "lodash-es";
import EventType from "~/constant/event-type.js";

/**
 *
 * @param props
 * @returns {{registerEvent: (function(string, {type: string}, Function): void)}}
 */
export function useEvent(props) {
    if (!props || !props.setting) {
        throw new Error("使用useEvent请务必保证props存在且props.setting存在")
    }
    const eventCenter = useEventCenter()

    /**
     * 注册函数到事件中心
     * @param {string} name
     * @param {{ type: string }} options
     * @param {Function} fn
     */
    const registerEvent = (name, options, fn) => {
        if (!options || !options.type) {
            if (!isObject(options)) {
                options = {};
            }
            options.type = EventType.CUSTOM_RECT;
        }
        eventCenter.registerEvent(
            name,
            props.setting,
            fn,
            options
        )
    }

    // onUnmounted(() => {
    //     eventCenter.clearEventByName(props.setting)
    // })

    return {
        registerEvent
    }
}
