<template>
  <el-table :data="tableData" border fit header-row-class-name="column" row-class-name="content">
    <el-table-column
      v-for="item in tableColumns"
      align="center"
      :prop="item.prop"
      :label="item.label"
      :min-width="item.minWidth || '2rem'"
    >
      <template #default="scope">
        <span v-if="item.prop === 'Service'">
          {{ scope.row[item.prop]}}
        </span>
        <div v-else class="flex justify-center" >
          <i class="w-3 h-3 bg-[#8794aa] rounded-full"></i>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import { ElTable } from "element-plus";

const tableData = [
  { Service: 'Offshore Oil & Gas EP Facility'},
  { Service: 'Floater (FPSO, FLNG, WTG & Solar)'},
  { Service: 'Subsea Pipeline / Cable'},
  { Service: 'Wind Farm (Substation)'},
  { Service: 'Cryogenic Facility (LNG, LPG...)'},
  { Service: "Onshore Oil & Gas Plant"},
  { Service: "CCS/CCUS"},
  { Service: "Hydrogen/NH3/CH30H Process..."},
  { Service: "Skid Equipment & Pressure Vessel"},
  { Service: "Automotive FC & Powertrain"}
];
const tableColumns = [
  {prop: "Service", label: "Service Scope", minWidth: "5rem"},
  {prop: "FS", label: "FS & FEED"},
  {prop: "Cost", label: "Cost Estimation"},
  {prop: "Engineering", label: "Engineering &Design"},
  {prop: "Third", label: "Third Party Review"},
  {prop: "Risk", label: "Risk Analysis"},
  {prop: "PMC", label: "PMC"},
  {prop: "System", label: "System/Digitalization"},
  {prop: "ESG", label: "ESG Service"},
  {prop: "Integrity", label: "Integrity Management"}
];
</script>
<style scoped>

.el-table {
  width: 60rem;
}
:deep(.el-table__inner-wrapper::before) {
  background-color: #fff;
}
:deep(.el-table__header-wrapper) {
  display: flex;
  align-items: center;
}
:deep(.content) {
  background-color: #efeeee !important;
}
:deep(.content .el-table__cell) {
  border-right: 1px solid #e3e3e5;
  border-bottom: 1px solid #e3e3e5;
}
:deep(.content .el-table__cell:first-child .cell) {
  padding: 0;
  font-size: 0.5rem;
  height: 2rem;
  line-height: 2rem;
}
:deep(.column .el-table__cell) {
  font-weight: 400;
}
:deep(.column .el-table__cell .cell) {
  padding: 0;
}
:deep(.column > .el-table__cell:nth-child(odd)) {
  color: #e6ecf7;
  background-color: #005bcb;
}
:deep(.column > .el-table__cell:nth-child(even)) {
  color: #e6ecf7;
  background-color: #0774e7;
}
</style>
