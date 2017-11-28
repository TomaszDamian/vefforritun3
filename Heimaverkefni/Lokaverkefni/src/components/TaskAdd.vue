<template>
	<div id="MainDiv">
		<input type="text" class="input is-primary">
		<button class="button">submit Task</button>
	</div>
</template>

<script>
export default {
	name:"taskAdd",
	data () {
		return {

		}
	}
}
</script>

<style>
#MainDiv{
	display: inline;
}
.input{
	width: 250px;
	float: left;
}
.button{
	text-align: right;
}
</style>