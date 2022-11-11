<template>
  <div>Attendance</div>
</template>
<script setup>
import { attendance, inquireJoinCourse } from '@/api/student'
import { onMounted } from 'vue';

onMounted(() => {
  inquireJoinCourse().then((res) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>

</style>