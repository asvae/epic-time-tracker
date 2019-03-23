<template>
  <div class="TaskListPanel">
    <button @click="createNewTask()">Create</button>
    <button @click="loadTaskList()">Load Tasks</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
// import { Executor } from 'asva-executors'
import TaskCreatePanel from '../TaskCreatePanel/TaskCreatePanel.vue'
import {panelMixin} from 'asva-double-panel'

@Component({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
  },
})
export default class TaskListPanel extends Mixins(panelMixin) {
  // taskListExecutor = new Executor()

  async loadTaskList () {
    this.$socket.emit('loadTaskList', {})
  }

  createNewTask () {
    this.$panel.create(TaskCreatePanel)
  }
}
</script>

<style lang="scss">
.TaskListPanel {

}
</style>
