<template>
  <nav class="w-full z-10" :style="style">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo部分 -->
        <div class="flex-shrink-0">
<!--          <a href="#" class="font-bold text-xl" style="color: var(&#45;&#45;el-text-color-primary);">Logo</a>-->
          <el-image :src="setting.logoUrl"/>
        </div>
        <!-- 导航菜单部分 -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a v-for="item in setting.routeConfiguration" :key="item.path" :href="item.path" class="px-3 py-2 rounded-md text-sm font-medium link-hover" @click="handleChangePage(item.path)">
              {{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {DefaultProps} from "~/composable/default-props";
import EventType from "~/constant/event-type.js";
import {useEvent} from "~/composable/use-event.js";
import {generateComputedStyle, StyleKey} from "~/composable/generate-computed-style.js";

const navs = ref([])

const props = defineProps(DefaultProps)
const {
  registerEvent
} = useEvent(props);

const { style } = generateComputedStyle(
    props.setting,
    [StyleKey.BACKGROUND_COLOR, StyleKey.FONT],
    () => ({
      "border-bottom": `${props.setting.bottomBorderSize}px solid ${props.setting.bottomBorderColor}`,
      "--hover-color": `${props.setting.hoverColor}`
    })
)

watch(() => props.setting.dataSource, () => {
  if (props.setting.dataSource === "1") {
    navs.value = ["Home", "About", "Services", "Contact"];
  } else {
    navs.value = props.setting.routeConfiguration;
  }
}, {immediate: true})

registerEvent(
    "nav注册的方法",
    {type: EventType.CUSTOM_RECT},
    () => {
    }
)
</script>
<style>
.link-hover:hover {
  background: var(--hover-color);
}
</style>
