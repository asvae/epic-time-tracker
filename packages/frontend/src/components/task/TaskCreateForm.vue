<template>
  <div class="TaskCreateForm">
    <v-text-field
      v-model="task.title"
      label="Title"
      required
      @keyup.enter="submit()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Task } from '../../../../types/Task'
import { prepareEntity } from './entity-functions'
import { store } from '../../store/store'

@Component({})
export default class TaskCreateForm extends Vue {
  task = prepareEntity(new Task())

  submit () {
    store.tasks.push(this.task)
    this.task = prepareEntity(new Task())
  }
}
</script>

<style lang="scss">
.TaskCreateForm {

}
</style>
