<template>
  <VbDemo>
    <VbContainer>
      <TaskCreatePanel/>
    </VbContainer>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskCreatePanel from './TaskCreatePanel.vue'

@Component({
  components: { TaskCreatePanel },
})
export default class TaskCreatePanelDemo extends Vue {

}
</script>
