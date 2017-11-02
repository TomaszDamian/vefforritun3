<template>
	<div id="obutton">
		<box :Content="Text"></box>
		<pbutton>{{ buttonText }}</pbutton>
	</div>
</template>

<script>
import pbutton from "./button.vue"
import box from "./box.vue"
export default{
	name: "obutton",
	components:{pbutton, box},
	props:["buttonText","Text"],
	data () {
		return {
	}
	}
}
</script>

<style>
#box{
	border: none !important; 
}
#obutton{
	display: inline-block;
	border: solid #ff0000 1px;
	border-radius: 15px;
	padding: 5px
}
h1{
	text-align: center;
	padding-left: 15px;
	padding-right: 15px;
}
button{
	font-family: Comic Sans MS;
	background: #ffffff;
	border: solid blue 1px;
	padding: 10px;
	color: blue;
	border-radius: 15px;
}
</style>