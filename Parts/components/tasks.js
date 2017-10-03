Vue.component("task-list",{
	template:`
	<ul>
		<task v-for='task in tasks'>{{task.title}}</task>
	</ul>
	`,
	data: function(){
		return{
			tasks:[
				{title: "go to the store", complete: true},
				{title: "go home", complete: false},
				{title: "eat", complete: true},
				{title: "sleep", complete: false},
			]
		};
	}
});
Vue.component("task",{
	template:"<li><slot></slot></li>"
});
var app = new Vue({
	el: "#app",
	data: {
		
	}
});