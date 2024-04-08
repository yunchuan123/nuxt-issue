<template>
<div class="flex flex-wrap items-center">
  <el-dropdown v-for="(menu, index) in setting.menu" :key="index" >
    <!-- 菜单标题 -->
    <span :class="menuClass" :style="style">
      {{ menu.title }}
    </span>
    <!-- 菜单内容 -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(submenu, sIndex) in menu.submenus" :key="sIndex" @click="handleClick(submenu)">
          {{ submenu }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</template>

<script setup>
import { DefaultProps } from "~/composable/default-props.js";
import { concatAnimateClass } from "~/composable/use-animate-class.js";
import { generateComputedStyle, StyleKey } from "~/composable/generate-computed-style.js";

const props = defineProps({
  ...DefaultProps
});

const { style } = generateComputedStyle(
    props.setting,
    [StyleKey.BORDER, StyleKey.PADDING_MARGIN],
    () => {
      return {
        color: props.setting.textColor,
        backgroundColor: props.setting.backgroundColor
      }
    }
)

// 动画
const {
  menuClass
} = concatAnimateClass(props.setting, ["hover:bg-cyan-900"])

const handleClick = (menu) => {
}
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
