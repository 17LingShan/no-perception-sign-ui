<template>
  <pro-layout :menu="menus">

  </pro-layout>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const msg = reactive({
  text: "123213"
});
</script>

<style scoped>
</style>
