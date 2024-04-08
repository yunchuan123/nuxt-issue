<template>
  <div :class="containerClass" :style="style">
    <div
        v-for="(nodes) in setting.childNodes"
    >
      <Render :nodes="[nodes]"></Render>
    </div>
  </div>
</template>

<script setup>
import {DefaultProps} from "~/composable/default-props.js";
import {concatAnimateClass} from "~/composable/use-animate-class.js";
import {generateComputedStyle, StyleKey} from "~/composable/generate-computed-style.js";

const props = defineProps(DefaultProps);

const { containerClass } = concatAnimateClass(props.setting, ["w-full flex inline-block"]);


const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.HEIGHT, StyleKey.WIDTH, StyleKey.FLOAT, StyleKey.ALIGN_ITEMS, StyleKey.BACKGROUND_COLOR],
    () => {
      return {}
    }
)
</script>

<style scoped>

</style>
