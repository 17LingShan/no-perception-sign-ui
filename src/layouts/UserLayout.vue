<template>
  <div id="user-layout">
    <div class="container">
      <div class="user-layout-content">
        <div class="top">LingShan</div>
        <div class="content"></div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
#user-layout {
  width: 100%;
  height: 100%;

  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-image: url("@/assets/user-background.jpg");
    background-size: 100% 100%;

    .top {
      text-align: center;
    }
  }
}
</style>