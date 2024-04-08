<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ setting.titleContent }}</span>
        <el-button v-if="setting.showButton" class="button">
          {{ setting.buttonText }}
        </el-button>
      </div>
    </template>
    <div class="flex">
      <el-image
        :src="setting.imageList[0]?.url"
      />
      <div></div>
    </div>
    <template #footer>{{ setting.footerContent }}</template>
  </el-card>
</template>

<script setup>
import { DefaultProps } from "~/composable/default-props.js";

const props = defineProps(DefaultProps);

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
