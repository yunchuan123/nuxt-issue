<template>
  <img
      alt="图片"
      :style="style"
      :src="setting.imageUrl || setting.imageList[0]?.url"
  />
<!--  <template v-if="setting.local === '0'">-->
<!--    <img-->
<!--        alt="图片"-->
<!--        :style="style"-->
<!--        :src="setting.imageUrl || setting.imageList[0]?.url"-->
<!--    />-->
<!--  </template>-->
<!--  <template v-else>-->
<!--    <div :style="style">-->
<!--      本地图片不可预览-->
<!--    </div>-->
<!--  </template>-->

</template>

<script setup>
import {DefaultProps} from "~/composable/default-props.js";
import {generateComputedStyle} from "~/composable/generate-computed-style.js";
import {StyleKey} from "~/composable/generate-computed-style.js";

const props = defineProps(DefaultProps);
const {
  style
} = generateComputedStyle(props.setting, [StyleKey.WIDTH, StyleKey.HEIGHT], () => ({
  width: `${props.setting.width}%`
}));
</script>
