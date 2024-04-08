<template>
  <el-carousel class="w-4/5 mx-auto" :interval="4000" arrow="always" :height="height">
    <el-carousel-item v-for="(item, index) in setting.swiperList" :key="index">
      <el-image :src="item.url" alt="" style="width: 100%; height: 100%;" fit="cover" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import {computed} from "vue";
import {DefaultProps} from "~/composable/default-props";

const props = defineProps(DefaultProps);

const height = computed(() => {
  return props.setting.height + "px" || "300px";
});

</script>
