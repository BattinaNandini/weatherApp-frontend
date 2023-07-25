<template>
  <div class="homePageComponent">
    <div class="weatherBox">
      <br />
      <p>{{ locationData.name }},</p>
      <p>{{ locationData.country }}</p>
      <p>{{ locationData.localtime.slice(0, 10) }}</p>
      <img :src="currentData.icon" />
      <p>{{ currentData.temperature }}°C</p>
      <p>{{ currentData.humidity }} in</p>
      <p>{{ currentData.condition }}</p>
    </div>

    <div class="time">
      <p>Hourly Forecast</p>
      <div class="hour" v-for="(item, i) in hourData" :key="i">
        <h5>{{ item.time }}</h5>
        <img :src="item.icon" />
        <h5>{{ item.temperature }}°C</h5>
        <h5>{{ currentData.humidity }} in</h5>
        <p>{{ item.condition }}</p>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "HomePageComponent",
  props: {
    currentData: {
      typeof: [],
      require: true,
    },
    locationData: {
      typeof: [],
      require: true,
    },
    hourData: {
      typeof: [],
      require: true,
    },
  },
};
</script>
