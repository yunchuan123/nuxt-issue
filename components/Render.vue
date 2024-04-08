<template>
<!--  <div class="w-full">-->
<!--    <component v-for="item in nodes" :is="componentMapping[item.componentName]" :setting="processSetting(item)"></component>-->
<!--  </div>-->
  <component v-for="item in nodes" :is="componentMapping[item.componentName]" :setting="processSetting(item)"></component>
</template>
<script setup>
import { componentMapping } from '~/composable/component-mapping';
import {processSetting} from "~/composable/process-setting.js";

defineProps({
    nodes: {
        type: Array,
        default: () => []
    }
})
</script>
