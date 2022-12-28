<template>
   <div  class="absolute bottom-0  h-20 w-40 flex flex-row items-center justify-between " :class="props.posRight ? 'right-0 h-14 w-24' : ''">
      <div tabindex="1" @click="left()" @keydown.left="left()" class="angles">
         <svg  @keydown.left="left()" class="stroke-current  " width="16" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="" fill="none" fill-rule="evenodd"/></svg>
      </div>
      <div tabindex="2" @click="right()" @keydown.right="right()"  class="angles">
         <svg  class="stroke-current " width="16" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="" fill="none" fill-rule="evenodd"/></svg>
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'
   const props = defineProps({
      posRight : Boolean
   })

   const left = () => {
      store.heroIndex = store.heroIndex === 0 ? 2 : store.heroIndex - 1
   }
   const right = () => {
      store.heroIndex = store.heroIndex === 2 ? 0 : store.heroIndex + 1
   }
</script>


<style scoped>
 .angles{
      @apply h-full w-20 bg-black  text-dark_gray cursor-pointer grid place-items-center focus:ring-0 active:ring-0;
      
   }
   .angles:focus{
      outline: none;
      @apply bg-very_dark_gray;
      transition: all 400ms;
      
   }
</style>