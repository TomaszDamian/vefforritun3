<template>
  <div class="columns" id="app">
  	
  	<div class="TaskAddcontainer column is-two-thirds has-text-centered is-offset-2 inline-block">
  		<taskAdd></taskAdd>
  	</div>
    

    <div class="TaskContainer box column is-two-thirds has-text-centered is-offset-2 inline-block" v-for="Task in TaskList">
      <h1 class="title FloatLeft" :class="Task.completed?'CrossedOver' : ''">{{ Task.title }}</h1>
      <p class="subtitle "> Created:{{ Task.created }}</p>
      <p class="subtitle "> Updated:{{ Task.updated }}</p>
    </div>
  </div>	
</template>

<script type="text/javascript">
import taskAdd from "./TaskAdd.vue"
import axios from "axios"
export default {
  data(){
    return{
      TaskList: [],
    }
  },
  components:{taskAdd},
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
  text-align:right;
}
.CrossedOver{
  text-decoration: line-through;
}
#app{
  display:inline;
}
.FloatLeft{
  float:left;
}
.TaskAddcontainer{
	text-align:right;
}
</style>