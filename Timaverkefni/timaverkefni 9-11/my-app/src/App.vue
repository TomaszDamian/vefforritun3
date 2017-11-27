<template>
  <div id="app">
    <div class="concertDiv" v-for="concerts in ResponseData">
      <h3 class="title">{{ concerts.eventDateName }}</h3>
      <h5 class="subtitle">{{ concerts.eventHallName }}</h5>
      <img :src="concerts.imageSource">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return{
      ResponseData: [],
    }
  },
  mounted(){
    var self = this;
    axios.get('http://apis.is/concerts')
      .then(function(response){
        self.ResponseData = response.data.results;
      })
      .catch(function(errors){
        console.log(errors)
      });
  }
}
</script>

<style>
.subtitle{
  color: #0000ff;
}
body{
  padding:20px;
}
</style>
