<!--
 * @Date           : 2020-10-18 23:50:41
 * @FilePath       : /ping-space/src/pages/temp/index.vue
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
import m1 from "src/pages/temp/module/m1.vue";
import m2 from "src/pages/temp/module/m2.vue";
import m3 from "src/pages/temp/module/m3.vue";
import m4 from "src/pages/temp/module/m4.vue";
import m5 from "src/pages/temp/module/m5.vue";
import m6 from "src/pages/temp/module/m6.vue";

export default {
  components: {
    m1,
    m2,
    m3,
    m4,
    m5,
    m6
  },
  data() {
    return {
      tab: "m1",
      all_modules: [
        { component: "m1", text: "引入markdown文档" },
        { component: "m2", text: "网页直接拷贝元素节点" },
        { component: "m3", text: "引入pdf文档" },
        { component: "m4", text: "复制-pre格式化" },
        { component: "m5", text: "某天笔记1" },
        { component: "m6", text: "某天笔记2" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
