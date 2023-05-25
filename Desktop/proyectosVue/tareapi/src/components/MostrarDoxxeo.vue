<template>
  <div class="center-container">
    <h1>Fuiste Doxxeado</h1>
    <table>
      <tr>
        <td>IP:</td>
        <td>{{ ip }}</td>
      </tr>
      <tr>
        <td>País:</td>
        <td>{{ country }}</td>
      </tr>
      <tr>
        <td>Región:</td>
        <td>{{ region }}</td>
      </tr>
      <tr>
        <td>Ciudad:</td>
        <td>{{ city }}</td>
      </tr>
      <tr>
        <td>Hostname:</td>
        <td>{{ hostname }}</td>
      </tr>
      <tr>
        <td>Coordenadas:</td>
        <td>{{ loc }}</td>
      </tr>
      <tr>
        <td>Organización:</td>
        <td>{{ org }}</td>
      </tr>
      <tr>
        <td>Código Postal:</td>
        <td>{{ postal }}</td>
      </tr>
    </table>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        ip: '',
        country: '',
        region: '',
        city: '',
        hostname: '',
        loc: '',
        org: '',
        postal: '',
      };
    },
    mounted() {
      const ip = this.$route.params.ip;
      this.Doxxear(ip);
    },
    methods: {
      Doxxear(ip) {
        axios
          .get(`https://ipinfo.io/${ip}?token=1f5b071b487ac5`)
          .then(response => {
            this.ip=response.data.ip;
            this.country=response.data.country;
            this.region=response.data.region;
            this.city=response.data.city;
            this.hostname=response.data.hostname;
            this.loc=response.data.loc;
            this.org=response.data.org;
            this.postal=response.data.postal;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  