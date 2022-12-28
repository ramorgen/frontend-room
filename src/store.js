import { reactive } from "vue";

import d_hero1 from './assets/img/desktop-image-hero-1.jpg'
import d_hero2 from './assets/img/desktop-image-hero-2.jpg'
import d_hero3 from './assets/img/desktop-image-hero-3.jpg'
import m_hero1 from './assets/img/mobile-image-hero-1.jpg'
import m_hero2 from './assets/img/mobile-image-hero-2.jpg'
import m_hero3 from './assets/img/mobile-image-hero-3.jpg'
import f_left from './assets/img/image-about-dark.jpg'
import f_right from './assets/img/image-about-light.jpg'



const  store = reactive({
   version: "1.0.00",
   wWidth:0,
   wHeight:0,
   pics:[d_hero1,d_hero2,d_hero3,m_hero1,m_hero2,m_hero3,f_left,f_right],
   heroIndex:0,
   heroText:[
               {
                  b:`We provide unmatched quality, comfort, and style for property owners across the country. 
                  Our experts combine form and function in bringing your vision to life. Create a room in your 
                  own style with our collection and make your property a reflection of you and what you love.`,
                  t:`Discover innovative ways to decorate`
               },
               {
                  b:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                  store locator. Any questions? Don't hesitate to contact us today.`,
                  t:`We are available all across the globe`
               },
               {
                  b:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                  experience in this industry, we understand what customers want for their home and office.`,
                  t:`Manufactured with the best materials`
               }
            ]
})

export default store

