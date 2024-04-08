import { computed, ref } from "vue";
import { useEvent } from "~/composable/use-event.js";
import EventType from "~/constant/event-type.js";

export function useContentState(props, contentPropName, eventName) {

    const contentRef = ref("");

    const content = computed(() => {
        return contentRef.value || props.setting[contentPropName];
    })

    const {
        registerEvent
    } = useEvent(props)

    registerEvent(
        eventName || `${props.setting.componentName}修改内容`,
        { type: EventType.CUSTOM_RECT },
        (content) => {
            contentRef.value = content;
        }
    )

    return {
        content
    }
}
