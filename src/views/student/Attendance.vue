<template>
  <div>Attendance</div>
</template>
<script setup>
import { attendance } from '@/api/student'
import { onMounted } from 'vue';

onMounted(() => {
  const sutdent = {
    student_id: 2000300115
  }
  attendance(JSON.stringify(sutdent)).then((res) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>

</style>