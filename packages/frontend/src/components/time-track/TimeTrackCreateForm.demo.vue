<template>
  <VbDemo>
    <VbContainer>
      <TimeTrackCreateForm/>
    </VbContainer>
    <VbContainer>
      {{ store.timeTracks }}
    </VbContainer>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TimeTrackCreateForm from './TimeTrackCreateForm.vue'
import {store} from '../../store/store'

@Component({
  components: {
    TimeTrackCreateForm,
  }
})
export default class TimeTrackCreateFormDemo extends Vue {
  store = store
}
</script>
