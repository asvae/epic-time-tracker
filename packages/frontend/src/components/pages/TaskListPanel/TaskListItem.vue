<template>
  <v-list-tile class="TaskListItem" :key="task._key">
    <v-list-tile-content>
      <v-list-tile-title>{{ task.title }}</v-list-tile-title>

    </v-list-tile-content>
    <v-list-tile-content>
      <strong>{{lastDayTimeReadable}}</strong> {{lastDayRelativeReadable}}
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn
        small
        color="primary"
        icon
        @click="timeTrackActive ? $emit('stopTracking') : $emit('startTracking')"
      >
        <v-icon>{{timeTrackActive ? 'stop' : 'play_arrow'}}</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" small flat color="primary" icon>
            <v-icon color="primary">more_vert</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            @click="$emit('remove')"
          >
            <v-list-tile-action>
              <v-icon color="purple">delete_forever</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Remove
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-list-tile-action>
    <v-progress-linear
      v-if="timeTrackActive"
      class="TaskListItem__time-track-active"
      indeterminate
      :height="2"
    />
  </v-list-tile>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Task } from '../../../../../types/Task/Task'
import {
  getLastDayTimeReadable,
  getLastDayRelativeReadable,
} from '../../../../../types/Task/Task-helpers'

@Component({})
export default class TaskListItem extends Vue {
  @Prop({ required: true, type: Task }) task: Task
  @Prop({ type: Boolean }) timeTrackActive: boolean

  get lastDayTimeReadable () {
    if (!this.task.timeTracks.length) {
      return
    }
    return getLastDayTimeReadable(this.task)
  }

  get lastDayRelativeReadable() {
    if (!this.task.timeTracks.length) {
      return
    }
    return getLastDayRelativeReadable(this.task)
  }
}
</script>

<style lang="scss">
.TaskListItem {
  &__time-track-active {
    position: absolute;
    min-width: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
