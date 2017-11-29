<template>
	<div class="MainDiv column is-two-thirds has-text-centered is-offset-2 inline-block">
		<div class="inputDiv">
			<input v-model="TaskToAdd" type="text" class="input is-primary">
			<label class="checkbox">
				<p class="subtitle IsFinished">Finished:</p>
				<input type="checkbox" class="checkbox" v-model="FinishedorNot">
			</label>
		</div>
		<button @click="SendDataToAPI" class="button is-link">submit Task</button>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name:"taskAdd",
	data () {
		return {
			TaskToAdd:"",
			FinishedorNot: false
		}
	},
	methods:{
		SendDataToAPI(){
			var cthis = this;
			axios.post('http://fjolbraut.org/api/tasks?api_token=tXf0juUmbRcD7FMZKJzhN7mcYRV2SutX1nvgfZxLRc6Z19eIdqlfgKl4uQrI', {
            	title: cthis.TaskToAdd,
            	completed: cthis.FinishedorNot
			     })
			     .then(function(response) {
			        console.log(response);
			        cthis.TaskToAdd = ""
			        cthis.FinishedorNot = false;
			     })
			     .catch(function(error) {
			        console.log(error);
			     });

		}
	}
}
</script>

<style>
.MainDiv{
	margin-bottom: 50px;
	text-align: left;
}
.inputDiv{
	float: left;
}
.IsFinished{
	display: inline;
	padding-right: 5px;
}
.input{
	width: 300px;
}
.button{
	float: right;
}
</style>