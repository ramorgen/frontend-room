<template>
   <div class="max-w-[420px] xl:max-w-[840px] relative" >
     <img class="" :src="store.pics[store.heroIndex]" alt="">
     <room-angles  v-if="store.wWidth < 1381" :posRight="true" />
   </div>
   <slot>
      
   </slot>
</template>


<script setup>
   import store from '../store.js'

</script>


<style scoped>
</style>