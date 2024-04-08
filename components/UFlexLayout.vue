<template>
  <div :class="containerClass" class="z-10 bg-center bg-no-repeat bg-cover" :style="style">
    <div
        v-for="(nodes,index) in setting.childNodes"
        :class="childContainerClass"
        :style="getChildStyle(index)"
        @click="checkFnAndRun(setting.clickChildCallBack, {index})"
    >
      <Render :nodes="nodes"></Render>
    </div>
  </div>
</template>
<script setup>
import {onMounted} from "vue";

import {DefaultProps} from "~/composable/default-props.js";
import {concatAnimateClass, concatChildAnimateClass} from "~/composable/use-animate-class.js";
import {checkFnAndRun} from "~/composable/reviewers/event-check.js";
import {generateComputedStyle, StyleKey} from "~/composable/generate-computed-style.js";

const props = defineProps(DefaultProps);

const {containerClass} = concatAnimateClass(props.setting, ["w-full flex"])
const {childContainerClass} = concatChildAnimateClass(props.setting, [])

function getChildStyle(index) {
  const childStyle = {
    flex: props.setting[`containerScale${index}`] || 'unset',
    padding: `0 ${props.setting.padding ? props.setting.padding : 0}px`,
    background: `${props.setting[`containerBackground${index}`] || 'unset'}`,
    'border-radius': `${props.setting.childContainerRadius}px`
  }

  if (!props.setting.childContainerRadius) {
    delete childStyle["border-radius"];
  }

  if (props.setting[`containerBackground${index}`]) {
    delete childStyle.background
  }

  if (!props.setting.padding) {
    delete childStyle.padding
  }

  return childStyle;
}


const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.HEIGHT, StyleKey.WIDTH, StyleKey.FLOAT, StyleKey.ALIGN_ITEMS, StyleKey.BORDER],
    () => ({
      gap: `${props.setting.gap}px`,
      backgroundColor: `${props.setting.backgroundColor}`,
      flexDirection: props.setting.flexDirection,
      'background-image': `url(${props.setting.backgroundImageUrl})`
    })
)

onMounted(() => {
  checkFnAndRun(props.setting.mountedCallBack)
});
</script>
