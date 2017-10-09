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
						<div style="background:white;">
							<h1>hello fren</h1>
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
var app = new Vue({
	el: "#app",
	data: {
	}
});