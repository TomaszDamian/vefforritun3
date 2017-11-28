<template>
  <taskdisplay></taskdisplay>
</template>

<script>
import taskdisplay from './components/taskDisplay.vue';
export default {
  name: 'app',
  components:{taskdisplay},
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma"
</style>
