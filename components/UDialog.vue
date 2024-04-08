<template>
  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>

import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import {useEvent} from "~/composable/use-event.js";
import { DefaultProps } from '~/composable/default-props.js';
import EventType from "~/constant/event-type.js";

const props = defineProps(DefaultProps);

const dialogVisible = ref(false)
const {
  registerEvent
} = useEvent(props)


registerEvent(
    "打开弹窗",
    { type: EventType.CUSTOM_RECT },
    () => {
      dialogVisible.value = true
    }
)


const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
