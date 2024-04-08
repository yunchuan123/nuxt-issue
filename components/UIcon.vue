<template>
  <div>
    <client-only>
      <el-icon :size="size" :color="color">
        <component :is="setting.icon"></component>
      </el-icon>
    </client-only>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { DefaultProps } from "~/composable/default-props.js";

const props = defineProps(DefaultProps);

const size = computed(() => props.setting.size);
const color = computed(() => props.setting.color);

</script>
