<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Helvetica;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
table {
    width: 50%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }

</style>z