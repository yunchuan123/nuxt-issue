<template>
  <Render :nodes="state.nodes" />
</template>
<script setup>
import { reactive } from "vue";
import Render from "~/components/Render.vue";
import { pageMapping } from "~/constant/page-json/index.js";

const state = reactive({
    textarea2: "",
    nodes: []
})

const route = useRoute();

const routePath = route.fullPath.split("?")[0];
state.nodes = pageMapping[routePath];
</script>
