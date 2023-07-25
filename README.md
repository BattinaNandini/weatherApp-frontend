# WeatherApp

The application is built using Vue.js, a popular JavaScript framework for creating dynamic and interactive user interfaces. It interacts with a backend API that provides weather data for cities based on the endpoint `/findByLocationName/{locationName}`. When a user enters a location name in the frontend, Vue.js sends a request to the backend API with the specified location name. The backend then processes the request, retrieves the weather data for the corresponding city, and sends it back to the frontend. Vue.js, in turn, updates the UI to display the weather information to the user. This architecture allows users to access real-time weather reports for different locations, making the application a convenient and valuable tool for obtaining weather updates and forecasts.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
