<template>
  <div id="app columns">
    <div class="column is-half has-text-centered is-offset-3 inline-block">
      <input v-model="SelectedCompany" type="radio" value="All">All
      <div v-for="Companies in CompanyList" style="display:inline-block; padding-left:15px;">
        <input v-model="SelectedCompany" type="radio" :value="Companies">{{ Companies }}
      </div>
    </div>
    <div class="box column is-half has-text-centered is-offset-3" v-for="FuelData in SortedByPrice">
      <h1 class="title">{{FuelData.company}}</h1>
      <p class="Prices">bensin95: {{FuelData.bensin95}}</p>
      <p class="Prices">diesel: {{ FuelData.diesel }}</p>
      <h1 class="title">Station: {{ FuelData.name }}</h1>
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
      CompanyList: [],
      MaxBensinPrice : 300,
      SelectedCompany : "All",
    }
  },
  computed: {
    SortedByPrice(){
      var sorted = this.ResponseData.sort(function(a,b){
        return a.bensin95 - b.bensin95;
      });
        
      sorted = sorted.filter(function(ResponseData){
        return ResponseData.bensin95 < this.MaxBensinPrice;
      }.bind(this));

      sorted = sorted.filter(function(ResponseData){
        if(this.SelectedCompany === "All" || this.SelectedCompany === ""){var isSelected = true};
        return ResponseData.company === this.SelectedCompany || isSelected;
      }.bind(this));
      this.FilterCompanyNames
      return sorted;
    },
    FilterCompanyNames(){
      var Sortedcompanies = this.ResponseData.sort(function(a,b){
        if(a.company < b.company) return -1;
        if(a.company > b.company) return 1;
        return 0;
      });

      Sortedcompanies = Sortedcompanies.map(function(item){
        if(this.CompanyList.indexOf(item.company) === -1){
          this.CompanyList.push(item.company)
        }
      }.bind(this));
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
.box{
  color:#c0c0c0;
}
.box:hover{
  color:#000000;
}
.title{
  position:relative;
  left:0%;
}
.Prices{
  position:relative;
  right:0%;
}
@import "~bulma/bulma"
</style>