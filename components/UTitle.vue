<template>
  <component :is="setting.dynamicTag" :style="style">{{ setting.title }}</component>
</template>
<script setup>
import { DefaultProps } from "~/composable/default-props.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";
import { useEvent } from "~/composable/use-event.js";
import EventType from "~/constant/event-type.js";



const props = defineProps(DefaultProps);

const { registerEvent } = useEvent(props)

registerEvent("内容修改", { type: EventType.CUSTOM_RECT }, (content) => {
  props.setting.title = content;
})

const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.PADDING_MARGIN, StyleKey.FONT]
)
</script>
