<template>
  <div class="TaskListPanel">
    <v-btn @click="createNewTask()">Create</v-btn>
    <v-btn @click="loadTaskList()">Refresh task list</v-btn>
    <div>
      <div
        v-for="task in tasks"
        :key="task._key"
      >
        {{task.title}}
        <v-btn @click="removeTask(task)">Remove</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
// import { Executor } from 'asva-executors'
import TaskCreatePanel from '../TaskCreatePanel/TaskCreatePanel.vue'
import { panelMixin } from 'asva-double-panel'
import { Action } from '../../../api/Action'
import {
  ServerResponseType,
  TaskList,
  TaskCreated, TaskRemoved,
} from '../../../api/ServerResponce'
import { Task } from '../../../../../types/Task'

export const removeByKey = (list: {_key: string}[], key: string) => {
  return list.filter(listItem => listItem._key !== key)
}

@Component({
  sockets: {
    [ServerResponseType.TASK_LIST] (taskList: TaskList) {
      this.tasks = taskList.body
    },
    [ServerResponseType.TASK_CREATED] (taskCreated: TaskCreated) {
      this.tasks.push(taskCreated.body)
    },
    [ServerResponseType.TASK_REMOVED] (taskRemoved: TaskRemoved) {
      this.tasks = removeByKey(this.tasks, taskRemoved.body._key)
    },
  },
})
export default class TaskListPanel extends Mixins(panelMixin) {
  tasks: Task [] = []
  created () {
    this.loadTaskList()
  }
  async loadTaskList () {
    this.$socket.emit(Action.TASK_LIST)
  }
  createNewTask () {
    this.$panel.create(TaskCreatePanel)
  }
  removeTask(task) {
    this.$socket.emit(Action.TASK_REMOVE, task)
  }
}
</script>

<style lang="scss">
.TaskListPanel {

}
</style>
