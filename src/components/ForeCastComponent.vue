<template>
  <div class="ForeCastComponent">
    <div class="astro">
      <br />
      <br />
      <p>sunrise: {{ astronomyData.sunrise }}</p>
      <p>sunset: {{ astronomyData.sunset }}</p>
      <p>moonrise: {{ astronomyData.moonrise }}</p>
      <p>moonset: {{ astronomyData.moonset }}</p>
      <p>Humidity: {{ currentData.humidity }} in</p>
      <p></p>
    </div>
    <div class="week">
      <p>Daily Forecast</p>

      <div class="day" v-for="(forecast, i) in forecastData" :key="i">
        <h5>{{ forecast.date }}</h5>
        <img :src="forecast.day.icon" />
        <h5>{{ forecast.day.temperature }}°C</h5>
        <h5>{{ forecast.day.humidity }} in</h5>

        <p>{{ forecast.day.condition }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForeCastComponent",
  props: {
    astronomyData: {
      typeof: [],
      require: true,
    },
    forecastData: {
      typeof: [],
      require: true,
    },
    currentData: {
      typeof: [],
      require: true,
    },
  },
};
</script>
