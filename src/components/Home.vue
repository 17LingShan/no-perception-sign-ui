<script setup>
import { reactive } from "@vue/reactivity";

const msg = reactive({
  text: "123213",
});
</script>

<template>
  <div>{{ msg.text }}</div>
</template>

<style scoped>
</style>
