<template>
    <div class="center-container">
        <h1>Rickrolleado</h1>
      <video ref="videoPlayer" autoplay>
        <source src="../assets/rickroll.mp4" type="video/mp4">
      </video>
      <div>serás redirigido en 10 segundos</div>
    </div>
  </template>

<script>
export default {
    mounted() {
  setTimeout(() => {
    this.$router.push('/ip');
  }, 10000); 
}
  };
</script>