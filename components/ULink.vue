<template>
  <p :style="style">
    <a :href="setting.path" class="cursor-pointer">
      {{ content }}
    </a>
  </p>
</template>
<script setup>
import { useContentState } from "~/composable/use-content-state.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";

const props = defineProps({
  setting: {
    type: Object,
    default: ""
  }
})

const {
  content
} = useContentState(props, "content")

const {
  style
} = generateComputedStyle(props.setting, [StyleKey.FONT]);

</script>
