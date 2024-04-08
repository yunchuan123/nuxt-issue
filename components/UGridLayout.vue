<template>
  <div :class="containerClass" :style="style">
    <div v-for="(nodes, index) in setting.childNodes" :key="index" :style="{ padding: `0 ${setting.padding}px`}">
      <Render :nodes="nodes" />
    </div>
  </div>
</template>
<script setup>
import {DefaultProps} from "~/composable/default-props.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";
import {concatAnimateClass} from "~/composable/use-animate-class.js";

const props = defineProps(DefaultProps);

const {
  containerClass
} = concatAnimateClass(props.setting, ["w-full min-h-96 bg-purple-100 mx-auto h-full"])

// 计算属性，用于动态设置grid的样式
const { style } = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.PADDING_MARGIN],
    () => {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${props.setting.columns}, 1fr)`,
        gridTemplateRows: `repeat(${props.setting.rows}, 1fr)`,
        gridGap: props.setting.gap + "px",
        justifyItems: props.setting.justifyItems,
        alignItems: props.setting.alignItems,
        backgroundColor: props.setting.backgroundColor,
        width: props.setting.width + "%",
        minHeight: props.setting.minHeight + "vh"
      }
    }
)

</script>