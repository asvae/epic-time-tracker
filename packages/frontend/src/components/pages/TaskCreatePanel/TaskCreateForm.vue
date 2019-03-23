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
import { Task } from '../../../../../types/Task'
import { prepareEntity } from '../../../../../types/entity-functions'
import { store } from '../../../store/store'
import { Action } from '../../../api/Action'

@Component({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    hello: function (data) {
      console.log('hello', data)
    }
  },
})
export default class TaskCreateForm extends Vue {
  task = prepareEntity(new Task())

  submit () {
    this.$socket.emit(Action.CREATE_TASK, this.task)

    store.tasks.push(this.task)
    this.task = prepareEntity(new Task())
  }
}
</script>

<style lang="scss">
.TaskCreateForm {

}
</style>
