<template>
  <div class="columns" id="app">
    <div class="Info column is-1 FloatLeft">
      <p class="infoText is-size-7">click on the title to update status</p>
      <br>
      <br>
      <p class="infoText is-size-7">Updating can be a little slow due to the delay of the data sending</p>
    </div>
  		<taskAdd @Update="GetDataAgain()"></taskAdd>
    <div class="TaskContainer box column is-two-thirds has-text-centered is-offset-2 inline-block" v-for="Task in TaskList">
      
      <h1 class="title FloatLeft" :class="Task.completed?'CrossedOver':'NotFinished'" @click="UpdateStatus(Task.id), GetDataAgain()">{{ Task.title }}</h1>
      
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
  },
  methods:{
    UpdateStatus(TaskID){
      var id = TaskID;

      axios.post('http://fjolbraut.org/api/tasks/' + id + '/status?api_token=tXf0juUmbRcD7FMZKJzhN7mcYRV2SutX1nvgfZxLRc6Z19eIdqlfgKl4uQrI')
      .then(function(response) {
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    GetDataAgain(){
      var self = this
      setTimeout(function(){
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
      },30);
    }
  }
}	
</script>

<style lang="scss">
h1{
  margin:0px !important;
  cursor:pointer;
}
p{
  margin:0px !important;
  text-align:right;
}
.CrossedOver{
  text-decoration: line-through;
  color: red;
  transition:color 1s;
}
.NotFinished{
  color: #1e4e99;
  transition:color 1s;
}
.infoText{
  color:#c9c9c9;
  text-align:left;
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