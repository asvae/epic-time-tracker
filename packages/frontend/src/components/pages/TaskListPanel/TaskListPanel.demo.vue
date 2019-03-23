<template>
   <TaskListPanel style="width: 500px; height: 100%"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskListPanel from './TaskListPanel.vue'

@Component({
  components: { TaskListPanel },
})
export default class TaskListPanelDemo extends Vue {

}
</script>
