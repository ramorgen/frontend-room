<template>
   <div class="flex flex-col xl:flex-row">
      <div class="w-full xl:w-[29.2%] " >
         <img class="max-w-[420px] " :src="store.pics[6]" alt="">
      </div>
      <div class="xl:w-[40.2%]  px-12 py-12">
         <h2 class="text-f16 font-bold uppercase tracking-[6.67px]">About our furniture</h2>
         <p class="pt-4 text-f16 font-medium leading-[1.35rem] text-dark_gray tracking-[-.33px] ">
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
         </p>
         <div class="attribution mt-11">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">R. Morgen</a>.
         </div>
      </div>
      <div class="xl:w-[30.6%] " >
         <img class="max-w-[420px] xl:max-w-[440px] " :src="store.pics[7]" alt="">
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'

</script>


<style scoped>

</style>