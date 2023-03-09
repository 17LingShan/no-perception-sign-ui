<template>
  <div id="user-layout">
    <div class="container">
      <div class="user-layout-content">
        <div class="top">
          <div class="header">LingShan</div>
          <div class="desc">简介</div>
        </div>
        <router-view />
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#user-layout {
  height: 100%;

  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    padding-top: 60px;
    background: url("@/assets/user-background.jpg") no-repeat 50%;
    background-size: 100%;

    .user-layout-content {
      padding: 32px 0 24px;

      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;
          font-size: 32px;
        }

        .desc {
          font-size: 24px;
          margin: 20px 0 50px;
        }
      }

      .main {
        min-width: 260px;
        width: 500px;
        margin: 0 auto;
      }
    }
  }
}
</style>
