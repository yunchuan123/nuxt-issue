<template>
  <div :style="style">
    <ul>
      <li v-for="item in setting.listItemConfiguration" :key="item" :style="`color: ${item.color}`">
        {{ item.value }}
        <ul class="child-list ml-6">
          <li v-for="childItem in item.children" class="flex" :style="`color: ${item.color}`">
            <div>-</div>
            <div class="ml-1">
              {{ childItem.value }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {DefaultProps} from "~/composable/default-props.js";
import {generateComputedStyle, StyleKey} from "~/composable/generate-computed-style.js";


const props = defineProps(DefaultProps);

const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.PADDING_MARGIN, StyleKey.FONT],
    () => ({
      "--marker-color": props.setting.markerColor
    })
)

</script>

<style>
ul {
  list-style: inside;
}

ul li::marker {
  color: var(--marker-color)
}

.child-list li::marker {
  content: "-";
  color: darkgray;
}

/* 这只是基本样式，你可以根据需要进行修改 */
</style>
