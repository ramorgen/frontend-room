<template>
   <div class="xl:w-[41.67%] relative  ">
      <div class="px-12 py-12   xl:mt-[22.47%] xl:px-0 xl:py-0 mx-auto max-w-[400px] ">
         <h1 class="text-[2.5rem]  xl:text-[3rem]  leading-[2.75rem] tracking-[-2px]  font-semibold">
            {{ store.heroText[store.heroIndex].t }}
         </h1>
         <p class="xl:mt-6  text-f16 font-medium leading-[1.375rem] tracking-[-0.4px] text-dark_gray ">
            {{ store.heroText[store.heroIndex].b }}
         </p>
         <div class="mt-6 flex flex-row items-center">
            <p class="text-f16 font-bold uppercase tracking-[0.85em] cursor-pointer hover:text-dark_gray 
                     hover:tracking-[0.75rem] transition-all" 
            >
               Shop now
            </p>
            <svg class="ml-4" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
         </div>
      </div>
      <room-angles v-if="store.wWidth>1380" />
   </div> 
</template>


<script setup>
   import store from '../store.js'

  
</script>

<style scoped>
   .textContainer{
      max-width: 400px;

   }

</style>

