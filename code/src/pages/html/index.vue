<!--
 * @Date           : 2020-10-18 23:50:41
 * @FilePath       : /ping-space/src/pages/html/index.vue
 * @Description    : 
-->
<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="">
 <q-tabs v-model="tab" dense class="bg-grey-3" align="left">
        <q-tab
          v-for="(item, index) in all_modules"
          :key="index"
          :name="item.component"
          :label="item.text"
        />
      </q-tabs>
      <div>
        <component :is="tab"></component>
      </div>
    </div>
  </div>
</template>

<script>
import m1 from "src/pages/html/module/m1.vue";
import m2 from "src/pages/html/module/m2.vue";

export default {
  components: {
    m1,
    m2
  },
  data() {
    return {
      tab: "m1",
      all_modules: [
        { component: "m1", text: "1019-1025 学习笔记" },
        { component: "m2", text: "1026-1101 学习笔记" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
