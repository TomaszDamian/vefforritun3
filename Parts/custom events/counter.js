Vue.component("button-counter",{
	data: function(){
		return{
			counterNumber: 0
		}
	},
	template:`
		<button class="button is-primary" @click="IncreaseNumber"> {{ counterNumber }} </button>
	`,
	methods:{
		IncreaseNumber: function(){
			this.counterNumber ++
			this.$emit("increment")
		}
	}
});
var app = new Vue({
	el: "#app",
	data: {	
		total:0
	}
});