<template>
	<div id="box">
		<h1>
			{{ Content }}
		</h1>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "box",
	props:["Content"],
	data () {
		return {
	}
	}
}
</script>

<style>
#box{
	display: inline-block;
	border: solid #ff0000 1px;
	border-radius: 15px;
	padding: 15px
}
h1{
	text-align: center;
}
</style>