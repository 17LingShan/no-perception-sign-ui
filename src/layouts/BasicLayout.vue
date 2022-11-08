<template>
  <pro-layout :menu="layout.menus">
    <template v-slot:menuHeaderRender>
      <div>
        <img src="@/assets/vue.svg" alt=""/>
        <h1>hhhh</h1>
      </div>

    </template>
  </pro-layout>

</template>
<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import { permissionStore } from '@/store/permission'

const piniaPermission = permissionStore()
const layout = reactive({
  menus : null
})

onMounted(()=> {
  console.log(toRaw(piniaPermission.addRouters))
  layout.menus = toRaw(piniaPermission.addRouters)
  console.log(layout.menus)
})



</script>

<style lang="scss" scoped>

</style>