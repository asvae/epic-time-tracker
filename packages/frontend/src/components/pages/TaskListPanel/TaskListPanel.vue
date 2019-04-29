<template>
  <div class="TaskListPanel">
    <v-card>
      <v-toolbar
        color="purple"
        dark
      >
        <v-toolbar-title>Tasks</v-toolbar-title>
        <v-btn @click="loadTaskList()" icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <template v-if="currentTrack">
          {{formatDate(currentTrack.start)}} - {{formatDate(currentTrack.end)}} ({{currentTrackDistanceInWords}})
        </template>
        <v-spacer/>
        <v-btn @click="createNewTask()" icon>
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list>
        <template v-for="(task, index) in tasks">
          <v-list-tile :key="task._key">
            <v-list-tile-content>
              <v-list-tile-title>{{ task.title }}</v-list-tile-title>
              <v-list-tile-sub-title
                v-for="timeTrack in task.timeTracks"
                :key="timeTrack._key"
              >
                {{formatDate(timeTrack.start)}} - {{formatDate(timeTrack.end)}}
              </v-list-tile-sub-title>
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn dark color="primary" @click="trackTask(task)" icon>
                <v-icon>play_arrow</v-icon>
              </v-btn>
              <v-btn @click="removeTask(task)" icon>
                <v-icon color="purple">clear</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < tasks.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
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
import { Task } from '../../../../../types/Task/Task'
import { TimeTrack } from '../../../../../types/TimeTrack/TimeTrack'
import { prepareEntity } from '../../../../../types/entity-functions'
import {format} from 'date-fns'
import { formatDate } from '../../../../../types/helpers/date-helpers'

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
  currentTrack: TimeTrack = null
  tasks: Task[] = []
  updateTrackIntervalHandler = null
  created () {
    this.loadTaskList()
    this.updateTrackIntervalHandler = setInterval(this.updateCurrentTrack, 1000)
  }
  beforeDestroy () {
    clearInterval(this.updateTrackIntervalHandler)
  }
  formatDate(date: Date) {
    formatDate(date)
  }
  get currentTrackDistanceInWords (): string {
    return ''
  }
  async updateCurrentTrack() {
    if (!this.currentTrack) {
      return
    }
    this.currentTrack.end = new Date()
  }
  async loadTaskList () {
    this.$socket.emit(Action.TASK_LIST)
  }
  createNewTask () {
    this.$panel.create(TaskCreatePanel)
  }
  removeTask(task: Task) {
    this.$socket.emit(Action.TASK_REMOVE, task)
  }
  trackTask(task: Task) {
    const timeTrack = prepareEntity(TimeTrack.createAtNow())
    this.currentTrack = timeTrack
    task.timeTracks.push(timeTrack)
  }
}
</script>

<style lang="scss">
.TaskListPanel {

}
</style>
