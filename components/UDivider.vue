<template>
  <el-divider direction="vertical" :style="style" />
</template>
<script setup>
import {DefaultProps} from "~/composable/default-props.js";
import { generateComputedStyle } from "~/composable/generate-computed-style.js";
import { StyleKey } from "~/composable/generate-computed-style.js";

const props = defineProps(DefaultProps);
const { style } = generateComputedStyle(
    props.setting,
    [StyleKey.WIDTH, StyleKey.HEIGHT]
)
</script>
