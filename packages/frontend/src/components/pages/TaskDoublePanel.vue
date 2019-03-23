<template>
  <DoublePanel class="TaskDoublePanel"
    :left="leftPanel"
    :right="rightPanel"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskListPanel from './TaskListPanel/TaskListPanel.vue'
// import TaskCreatePanel from './TaskCreatePanel/TaskCreatePanel.vue'
import {DoublePanel } from 'asva-double-panel'

@Component({
  components: {
    DoublePanel
  }
})
export default class TaskDoublePanel extends Vue {
  get leftPanel () {
    return TaskListPanel
  }
  get rightPanel () {
    return undefined
    // return TaskCreatePanel
  }
}
</script>

<style lang="scss">
.TaskDoublePanel {

}
</style>
