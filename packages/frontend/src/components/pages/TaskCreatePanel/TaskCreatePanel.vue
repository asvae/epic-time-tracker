<template>
  <div class="TaskCreatePanel">
    <TaskCreateForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import TaskCreateForm from './TaskCreateForm.vue'
import {panelMixin} from 'asva-double-panel'

@Component({
  components: { TaskCreateForm },
})
export default class TaskCreatePanel extends Mixins(panelMixin) {

}
</script>

<style lang="scss">
.TaskCreatePanel {

}
</style>
