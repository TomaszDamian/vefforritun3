Vue.component("message",{
	props:["title"],
	data: function() {
		return{
			isVisable: true,
		};
	},
	template:`
		<article class="message" v-show="isVisable"
		>
			<div class="message-header">
				<p>{{ title }}</p>
				<button @click="removeMessage" class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				<slot></slot>
			</div>
		</article>`,
	methods:{
		removeMessage: function(){
			this.isVisable = false;
		}
	}
});

Vue.component("notification",{
	props:["notitype"],
	data: function(){
		return{
			isVisable: true,
		}
	},
	template:`
		<div class="notification" :class="notitype" v-show="isVisable">
	 		<button class="delete" @click="QuitNotification"></button>
			<slot></slot>
		</div>
	`,
	methods:{
		QuitNotification: function(){
			this.isVisable = false;
		}
	}
});

var app = new Vue({
	el: "#app",
	data: {
		
	}
});
