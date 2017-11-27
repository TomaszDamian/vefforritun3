<template>
  <div class="columns" id="app">
    <div class="TaskContainer column is-half is-offset-3" v-for="Task in TaskList">
      <h1 class="title" :class="Task.completed?'CrossedOver' : ''">{{ Task.title }}</h1>
      <p class="subtitle"> {{ Task.updated }}</p>
      <p class="subtitle"> Created: {{ Task.created }}</p>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data(){
    return{
      TaskList: [],
    }
  },
  mounted(){
    var self = this
    axios.get('http://fjolbraut.org/api/tasks', {
        params: {
            api_token: 'tXf0juUmbRcD7FMZKJzhN7mcYRV2SutX1nvgfZxLRc6Z19eIdqlfgKl4uQrI'
        }
     })
     .then(function(response) {
        self.TaskList = response.data;
     }).
     catch(function(error) {
        console.log(error);
     });
  }
}
</script>

<style lang="scss">
h1{
  margin:0px !important;
}
p{
  margin:0px !important;
}
.CrossedOver{
  text-decoration: line-through;
}
@import "~bulma/bulma"
</style>
