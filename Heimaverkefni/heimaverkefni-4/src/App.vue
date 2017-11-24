<template>
  <div id="app columns">
    <div class="column is-half is-offset-3 inline-block FilterContainer">
      <p>Filters:</p>
    </div>
    <div class="column is-half has-text-centered is-offset-3 inline-block">
      <input v-model="SelectedCompany" type="radio" value="All">All
      <div v-for="Companies in CompanyList" style="display:inline-block; padding-left:15px;">
        <input v-model="SelectedCompany" type="radio" :value="Companies">{{ Companies }}
      </div>
      <p class="subtitle is-6">Amount of Stations: {{ AmountofStations }}</p>
    </div>
    <div class="box column is-half has-text-centered is-offset-3" v-for="FuelData in SortedByPrice">
      <div class="BoxContainer">
        <div class="boxOne">
          <h1 class="title">{{FuelData.company}}</h1>
          <p class="Prices">bensin95: {{FuelData.bensin95}}</p>
        </div>
        <div class="boxTwo">
          <h1 class="title">{{ FuelData.name }}</h1>
          <p class="Prices">diesel: {{ FuelData.diesel }}</p>
        </div>
      </div>
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
      AmountofStations: 0,
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
      this.AmountofStations = sorted.length
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
.BoxContainer{
  padding:15px;
}

.boxOne{
  text-align:left;
}
.boxOne>*{
  display:inline;
}
.boxOne>p{
  float:right;
}

.boxTwo>*{
  display:inline;
  position:relative;
}
.boxTwo{
  text-align:left;
}
.boxTwo>p{
  float:right
}

p{
  color:#cfcfcf;
  transition:color 0.6s;
}


/*honestly I had no idea that you could do the thing I did here lol*/
.box:hover{
  p{
    color:black;
    transition:color 0.6s;
  }
}

.title{
  margin:0px!important;
}
.subtitle{
  text-align:left;
}
.FilterContainer{
  padding:0px !important;
}
@import "~bulma/bulma"
</style>