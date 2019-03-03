<template>
  <VbDemo>
    <VbContainer>
      <TaskSelect v-model="task"/>
    </VbContainer>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskSelect from './TaskSelect.vue'

@Component({
  components: {
    TaskSelect,
  }
})
export default class TaskSelectDemo extends Vue {
  task = null
}
</script>
