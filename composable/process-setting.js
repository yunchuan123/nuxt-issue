import { isObject } from "lodash-es";
import EventPipeline from "~/core/event-pipeline.js";
import {useEventCenter} from "~/stores/use-event-center.js";

const EVENT = "event";

const noop = () => {};

export function processSetting(setting) {
    const eventCenter  = useEventCenter()

    Object.keys(setting).forEach(key => {
        const item = setting[key];
        if (isObject(item) && item.type === EVENT) {
            if (item.event) {
                const eventPipeline = new EventPipeline(item.event, eventCenter, setting);
                setting[key] = eventPipeline.execute.bind(eventPipeline);
            } else {
                setting[key] = noop;
            }
        }
    })
    return setting
}
