<template>
  <div class="TimeTrackCreateForm">
    <TaskSelect v-model="timeTrack.task"/>
    {{timeTrack.task}}
    <v-btn
      v-if="timeTrack.task"
      @click="submit()"
    >
      Submit
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskSelect from '../task/TaskSelect.vue'
import { store } from '../../store/store'
import { prepareEntity } from '../../../../types/entity-functions'
import { TimeTrack } from '../../../../types/TimeTrack/TimeTrack'

@Component({
  components: { TaskSelect },
})
export default class TimeTrackCreateForm extends Vue {
  timeTrack = prepareEntity(new TimeTrack())

  submit () {
    store.timeTracks.push(this.timeTrack)
    this.timeTrack = prepareEntity(new TimeTrack())
  }
}
</script>

<style lang="scss">
.TimeTrackCreateForm {

}
</style>
