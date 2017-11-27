<template>
  <div id="app columns">
    <div class="column is-half has-text-centered is-offset-3 inline-block">
      <input type="number" class="input" v-model="MaxBensinPrice">
      <button class="button is-info">Sort by name</button>
      <button class="button is-info">Sort by diesel price</button>
      <button class="button is-info">Sort by bensin price</button>
    </div>
    <div class="box column is-half has-text-centered is-offset-3" v-for="FuelData in SortedByPrice">
      <h1>{{FuelData.company}}</h1>
      <p>bensin95: {{FuelData.bensin95}}</p>
      <p>diesel: {{ FuelData.diesel }}</p>
      <p>Station: {{ FuelData.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      ResponseData: [],
      MaxBensinPrice : 180,
      SortByName : false,
      SortByDiesel : false,
      SortByBensin : true
    }
  },
  computed: {
    SortedByPrice(){
      if(this.SortByBensin){
        var sorted = this.ResponseData.sort(function(a,b){
          return a.bensin95 - b.bensin95;
        });
      };


      sorted = sorted.filter(function(ResponseData){
        return ResponseData.bensin95 < this.MaxBensinPrice;
      }.bind(this));
      return sorted;
    }
  },
  mounted(){
    var self = this;
    axios.get('http://apis.is/petrol')
      .then(function(response){
        self.ResponseData = response.data.results;
        
      })
      .catch(function(errors){
        console.log(errors)
      });
  },
}
</script>

<style lang="scss">
@import "~bulma/bulma"
</style>
