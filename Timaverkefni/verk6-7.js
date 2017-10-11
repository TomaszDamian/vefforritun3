Vue.component("modalbox",{
	data: function() {
		return{
			isActive: false
		}
	},
	template:`
	<div>
		<button @click="OpenModal" class="button is-primary is-large modal-button">Activate modal</button>
			<div class="modal" :class="isActive?'is-active':''">
				<div @click="CloseModal" class="modal-background"></div>
					<div class="modal-content">
						<div class="box">
							<h1 class="title">hello fren</h1>
							<p>this is some random text</p>
						</div>
					</div>
				<button @click="CloseModal" class="modal-close is-large" aria-label="close"></button>
			</div>
	</div>
		`,
		methods:{
			CloseModal: function(){
				this.isActive = false;
			},
			OpenModal: function(){
				this.isActive = true
			}
		}
});
Vue.component("card",{
	props:["title","subtitle","image","avatar"],
	template:
	`
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
			<img :src="image" alt="Placeholder image">
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img :src="avatar" alt="Placeholder image">
					</figure>
				</div>
			<div class="media-content">
				<p class="title is-4">{{ title }}</p>
				<p class="subtitle is-6">@{{ subtitle }}</p>
			</div>
		</div>
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
	`
})
var app = new Vue({
	el: "#app",
	data: {
	}
});