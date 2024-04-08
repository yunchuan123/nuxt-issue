<template>
  <div :class="containerClass" :style="style">
    <picture>
      <source media="(min-width: 1600px)" :srcset="setting.backgroundImage">
      <img :srcset="setting.backgroundImage" style="height: auto; width: 100%; object-fit: cover; max-height: 45rem; z-index: 2" class="float-start">
    </picture>
    <div
        v-for="(nodes) in setting.childNodes"
    >
      <Render :nodes="[nodes]"></Render>
    </div>
  </div>
</template>

<script setup>
import { DefaultProps } from "~/composable/default-props.js";
import { concatAnimateClass } from "~/composable/use-animate-class.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";

const props = defineProps(DefaultProps);

const { containerClass } = concatAnimateClass(props.setting, ["w-full h-full"])


const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.MIN_MAX_HEIGHT, StyleKey.WIDTH, StyleKey.FLOAT],
    () => {
      return {
      }
    }
)
</script>

<style scoped>

</style>
