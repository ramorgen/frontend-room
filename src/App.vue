<template>
  
   <main >
      <div class="flex flex-col xl:flex-row">
         <room-hero>
            <room-nav></room-nav>
         </room-hero>
         <room-hero-text></room-hero-text>
      </div>
      <room-footer></room-footer>
   </main>
</template>

<script setup>
   import {useWindowResize} from '../../use/hooks.js' 
   import store from "./store.js"

   const { width, height } = useWindowResize(); 
   store.wWidth=width  
   store.wHeight=height 

  
  
</script>


<style>
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   body:not(.tab-user) button:focus,
   body:not(.tab-user) input:focus,
   body:not(.tab-user) select:focus,
   body:not(.tab-user) textarea:focus {
      outline: none;
   }
   
  
</style>
