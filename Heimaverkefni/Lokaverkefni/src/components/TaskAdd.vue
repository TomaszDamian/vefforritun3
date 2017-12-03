<template>
	<div class="MainDiv column is-two-thirds has-text-centered is-offset-2 inline-block">
		<div class="inputDiv">
			<button @click="SendDataToAPI" class="button is-link">submit Task</button>
			<input v-model="TaskToAdd" type="text" class="input is-primary" @keydown.enter="SendDataToAPI">
			<div class="labelBox">
				<label class="checkbox">
					<p class="subtitle IsFinished">Finished:</p>
					<input type="checkbox" class="checkbox" v-model="FinishedorNot">
				</label>
			</div>
		</div>
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
				cthis.TaskToAdd = ""
				cthis.FinishedorNot = false;
				cthis.$emit("Update")
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
	margin-bottom: 10px;
	text-align: left;
	background: #90e723;
	border-radius: 10px;
	border: 1px solid #b30000;
}
.inputDiv{
	width: 100%;
	height: 40px;
}
.IsFinished{
	display: inline;
	padding-right: 5px;
}
.input{
	width: 300px;
	float: left;
margin-right: 10px;
}
.button{
	float: left;
	margin-right: 5px;
}
.labelBox{
	float: left;
	margin-top: 3px;
}
</style>