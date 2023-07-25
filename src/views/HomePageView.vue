<template>
  <div class="homePageView" :id="weatherNow">
    <br />
    <input
      type="text"
      placeholder="search..."
      v-model="enteredSearch"
      @keypress.enter="ChangeSearch"
    />
    <img id="img_" src="../assets/loupe.png" @click="ChangeSearch" />
    <br />
    <br />
    <br />
    <br />
    <p style="font-size: 30px; font-family: cursive">{{ noSearch }}</p>
    <div v-if="searchedLocation.length > 0 && current != []">
      <HomePageComponent
        :currentData="current"
        :locationData="location"
        :hourData="hour"
      ></HomePageComponent>
      <ForeCastComponent
        :astronomyData="astronomy"
        :forecastData="forecast"
        :currentData="current"
      ></ForeCastComponent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueFullscreen from "vue-fullscreen";
import Vue from "vue";
Vue.use(VueFullscreen);
import HomePageComponent from "@/components/HomePageComponent.vue";
import ForeCastComponent from "@/components/ForeCastComponent.vue";
export default {
  name: "HomePageView",
  components: {
    HomePageComponent,
    ForeCastComponent,
  },
  data() {
    return {
      astronomy: [],
      hour: [],
      location: {
        name: "",
        country: "",
        localtime: "",
      },
      current: [],
      forecast: [],
      weatherNow: "",
      searchedLocation: "",
      enteredSearch: "",
      noSearch: "",
    };
  },

  /* eslint-disable */
  methods: {
    ChangeSearch() {
      if (this.enteredSearch != "") {
        this.searchedLocation = this.enteredSearch.toLocaleLowerCase();
        let weatherAPI =
          "api/location/findByLocationName/" + this.searchedLocation;

        axios
          .get(weatherAPI)
          .then((result) => {
            console.log(result.data);

            if (result.data != "") {
              result = result.data;
              this.location.name = result.locationName;
              this.location.localtime = result.localTime;
              this.location.country = result.locationCountry;
              this.current = result.current;
              this.forecast = result.foreCast;
              console.log(this.forecast);
              try {
                if (this.forecast != undefined) {
                  this.forecast[0].astrology != null
                    ? (this.astronomy = this.forecast[0].astrology)
                    : console.log("astronomy");
                  this.forecast[0].hour != null
                    ? (this.hour = this.forecast[0].hour)
                    : console.log("hour");
                  this.weatherNow = this.current.condition;
                  this.forecast = this.forecast.slice(1);
                }
              } catch (error) {
                console.log(error);
                console.log("something went wrong");
              }
            } else {
              console.log("Not found");
              this.noSearch = "City not Found...";
              this.astronomy = [];
              this.hour = [];
              this.location = [];
              this.current = [];
              this.forecast = [];
              this.weatherNow = "";
              this.searchedLocation = "";
              this.enteredSearch = "";
            }
          })
          .catch((error) => {
            this.noSearch = "City not Found...";
            this.astronomy = [];
            this.hour = [];
            this.location = [];
            this.current = [];
            this.forecast = [];
            this.weatherNow = "";
            this.searchedLocation = "";
            this.enteredSearch = "";
          });
      }
    },
  },
};
</script>
