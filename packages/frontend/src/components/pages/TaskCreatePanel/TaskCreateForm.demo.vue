<template>
  <VbDemo>
    <VbContainer>
      <TaskCreateForm/>
    </VbContainer>
    <VbContainer>
      {{store.tasks}}
    </VbContainer>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskCreateForm from './TaskCreateForm.vue'
import {store} from '../../../store/store'

@Component({
  components: {
    TaskCreateForm,
  }
})
export default class TaskCreateFormDemo extends Vue {
  store = store
}
</script>
