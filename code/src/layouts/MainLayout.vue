<!--
 * @Date           : 2020-10-18 22:21:05
 * @FilePath       : /ping-space/src/layouts/MainLayout.vue
 * @Description    : 
-->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(item, index) in menu" :key="index">
          <q-item
            clickable
              :class="item.name == current_menu?'bg-primary text-white':'bg=white text-black'"
            v-ripple
            @click="go_to_router(item)"
          >
            <!-- <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section> -->
            <q-item-section>
              {{ `${index + 1}.${item.text}` }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="q-px-lg">
      <router-view />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>
<script>
import {menu} from "src/config/menu.js";

export default {
  name: "MyLayout",
  data() {
    return {
      title: "平:成长空间",

      drawer: false,
      menu,
      current_menu: "temp",

      leftDrawerOpen: false
    };
  },
  created() {
    this.go_to_router({ name: "temp" });
  },
  methods: {
    go_to_router(item) {
      this.current_menu = item.name;
      this.$router.push({
        name: item.name
      });
    }
  }
};
</script>
