<template>
  <el-carousel
      ref="carousel"
      :style="style"
      :interval="setting.interval * 1000"
      arrow="always"
      :height="height"
      :autoplay="data.autoplay"
      :type="setting.carouselType"
  >
    <el-carousel-item v-for="(nodes) in setting.childNodes">
      <Render :nodes="nodes" />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { DefaultProps } from "~/composable/default-props.js";
import { getBorderStyle } from "~/settings/border-getter.js";
import { getPublicStyle } from "~/settings/style/public-setting/public-settings.js";
import {generateComputedStyle, StyleKey} from "~/composable/generate-computed-style.js";
import EventType from "~/constant/event-type.js";
import { useEvent } from "~/composable/use-event.js";

const props = defineProps(DefaultProps);

const carousel = ref();

const data = reactive({
  autoplay: true
});

const height = computed(() => {
  return props.setting.height + "px";
});

const {style} = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.PADDING_MARGIN],
    () => {
      return {
        gap: `${props.setting.gap}px`,
        backgroundColor: `${props.setting.backgroundColor}`,
        padding: `${props.setting.tbPadding}px ${props.setting.lrPadding}px`,
        justifyContent: props.setting.justifyContent,
        alignItems: props.setting.alignItems,
        ...getPublicStyle(props.setting),
        ...getBorderStyle(props.setting)
      }
    }
)

const {
  registerEvent
} = useEvent(props)

registerEvent(
  "CustomSwiper注册的方法",
  { type: EventType.CUSTOM_RECT },
  (params) => {
    carousel.value.setActiveItem(params.index);
  }
)

</script>
