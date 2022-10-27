<template>
  <div id="user-layout">
    <div class="container">
      <div class="user-layout-content">
        <div class="top">LingShan</div>
        <div class="content">简介</div>

        <router-view />

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
    padding: 10px;
    min-height: 100%;
    background-image: url("@/assets/user-background.jpg");
    background-size: 100%;

    .user-layout-content {
      text-align: center;

      .top {
        margin-top: 50px;
        font-size: 24px;
      }

      .content {
        font-size: 14px;
        margin-top: 18px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
