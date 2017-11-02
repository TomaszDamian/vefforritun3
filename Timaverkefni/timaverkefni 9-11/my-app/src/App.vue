<template>
  <div id="app">
    <modal @close="isVisable = false" v-show="isVisable">Thonkong</modal>
    <button @click="isVisable = true" class="button is-primary is-outlined">show Modal</button>
  </div>
</template>

<script>
import box from "./components/box.vue";
import pbutton from "./components/button.vue";
import obutton from "./components/obutton.vue";
import closebutton from "./components/closebutton.vue";
import modal from "./components/Modal.vue"

export default {
  components:{box, pbutton, obutton, closebutton, modal},
  name: 'app',
  data() {
    return {
      isVisable: false,
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma";
body{
  padding:20px;
}
</style>
