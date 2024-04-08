<template>
  <template v-if="setting.buttonShape === '1'">
    <el-button :style="circleStyle" :type="setting.type" :icon="setting.icon" @click="setting.clickEvent" :class="containerClass" circle />
  </template>
  <template v-else>
    <el-button :style="defaultStyle" :type="setting.type" :icon="setting.icon" @click="setting.clickEvent" :class="containerClass">
      {{ setting.textContent }}
    </el-button>
  </template>

</template>

<script setup>
import { DefaultProps } from "~/composable/default-props.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";
import {concatAnimateClass} from "~/composable/use-animate-class.js";
const props = defineProps(DefaultProps);

const {
  containerClass
} = concatAnimateClass(props.setting, [""]);

const { style:defaultStyle } = generateComputedStyle(
    props.setting,
    [StyleKey.PADDING_MARGIN, StyleKey.FONT, StyleKey.FLOAT, StyleKey.BORDER, StyleKey.HEIGHT, StyleKey.WIDTH],
    () => {
      return {
        width: props.setting.width + "px",
        height: props.setting.height + "px",
        fontSize: props.setting.fontSize,
        "--el-button-bg-color": props.setting.backgroundColor ? props.setting.backgroundColor : "unset"
      }
    }
);

const { style: circleStyle } = generateComputedStyle(
    props.setting,
    [StyleKey.PADDING_MARGIN, StyleKey.FONT, StyleKey.BORDER, StyleKey.FLOAT],
    () => {
      return {
        width: "1.5rem",
        height: "1.5rem",
        transform: `scale(${props.setting.buttonSize})`,
        "--el-button-bg-color": props.setting.backgroundColor ? props.setting.backgroundColor : "unset"
      }
    }
);
</script>
