<template>
    <div class="center-container">
        <h1>TU IP ES : <router-link :to="`/DoxxeoInfo/${ip}`">{{ ip }}</router-link></h1>
        <div>Haz click en tu ip para mas informacion</div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        ip: ''
      };
    },
    created() {
      this.obtenerIP();
    },
    methods: {
      obtenerIP() {
        axios
          .get('https://api.ipify.org/?format=json')
          .then(response => {
            this.ip = response.data.ip;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  