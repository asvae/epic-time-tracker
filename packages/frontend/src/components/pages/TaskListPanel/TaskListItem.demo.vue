<template>
  <VbDemo>
    <VbCard title="Default" noPadding width="400px">
      <TaskListItem :task="task"/>
    </VbCard>
    <VbCard title="Long text" noPadding width="400px">
      <TaskListItem :task="longTextTask"/>
    </VbCard>
    <VbCard title="Time track active" noPadding width="400px">
      <TaskListItem
        timeTrackActive
        :task="task"
      />
    </VbCard>
    <VbCard title="Has today time track" noPadding width="400px">
      <TaskListItem :task="taskWithTimeTrack"/>
    </VbCard>
    <VbCard title="Events" noPadding width="400px">
      <TaskListItem
        :task="task"
        timeTrackActive
        @stopTracking="$vb.log('stopTracking')"
      />
      <TaskListItem
        :task="task"
        @startTracking="$vb.log('startTracking')"
      />
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskListItem from './TaskListItem.vue'
import {
  getTask,
  getTaskWithLongTitle, getTaskWithTimeTrack,
} from '../../../../../types/Task/__demo__/Task-factories'

@Component({
  components: { TaskListItem },
})
export default class TaskListItemDemo extends Vue {
  task = getTask()
  longTextTask = getTaskWithLongTitle()
  taskWithTimeTrack = getTaskWithTimeTrack()
}
</script>
