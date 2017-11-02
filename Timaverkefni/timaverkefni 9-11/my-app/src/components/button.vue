<template>
	<div id="button">
		<button><slot></slot></button>
	</div>
</template>

<script>
export default {
	name: "pbutton",
	data () {
		return {
	}
	}
}
</script>

<style>
button{
	font-family: Comic Sans MS;
	background: #0000ff;
	border: none;
	padding: 15px;
	color: white;
	border-radius: 15px;
}
</style>