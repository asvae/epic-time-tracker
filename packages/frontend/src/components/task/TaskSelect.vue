<template>
  <v-select
    class="TaskSelect"
    :items="items"
    label="Tasks"
    item-text="title"
    v-model="valueProxy"
    @input="onInput"
    return-object
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { store } from '../../store/store'
import { Task } from '../../../../types/Task/Task'

@Component({})
export default class TaskSelect extends Vue {
  items = store.tasks
  @Prop({type: Task}) value: Task

  onInput (...args) {
    console.log('arguments', arguments)
  }

  get valueProxy () {
    return this.value
  }
  set valueProxy (value) {
    this.$emit('input', value)
  }
}
</script>

<style lang="scss">
.TaskSelect {

}
</style>
