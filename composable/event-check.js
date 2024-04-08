import { useEventCenter } from "~/stores/use-event-center.js";
import EventPipeline from "~/core/event-pipeline.js";

/**
 * 事件map
 * @type {Map<string, EventPipeline>}
 */
const EventMap = new Map();

/**
 * 检查方法并执行
 * @param eventOptions
 * @param setting
 */
export function checkFnAndRun(eventOptions, setting) {
    const { eventId } = eventOptions;
    if (EventMap.has(eventId)) {
        const eventPipeline = EventMap.get(eventId);
        const fn = eventPipeline.execute.bind(eventPipeline);
        return fn();
    } else {
        const eventCenter = useEventCenter();
        const eventPipeline = new EventPipeline(item.event, eventCenter, setting);
        EventMap.set(eventId, eventPipeline);
        const fn = eventPipeline.execute.bind(eventPipeline);
        return fn();
    }
}