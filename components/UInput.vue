<template>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script setup>
import {DefaultProps} from '~/composable/default-props.js';
import {ref} from "vue"
import EventType from "~/constant/event-type.js";
import {useEvent} from "~/composable/use-event.js";

const props = defineProps(DefaultProps);
const input = ref()

const {
  registerEvent
} = useEvent(props)


registerEvent(
    "input注册的方法",
    {type: EventType.CUSTOM_RECT},
    () => {
    }
)


</script>
