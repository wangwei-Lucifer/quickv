<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical">
      <project-item/>
      <sidebar-item v-for="route in sidebarRouters" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ProjectItem from './ProjectItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, ProjectItem },
  computed: {
    ...mapGetters([
      'projects',
      'sidebarRouters',
      'sidebar'
    ]),
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
