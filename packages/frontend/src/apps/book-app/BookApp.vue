<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BookApp extends Vue {

}
</script>
