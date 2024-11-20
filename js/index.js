/**
 * Cafert
 * Сafert is a stylish and modern cafe template. It was created for the restaurant business: cafe, bar, bakery, pub, restaurant, pizzeria or other restaurant business
 * Exclusively on https://1.envato.market/cafert-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import {initSwiperSlider} from "./modules/slider";
import initGallery from "./modules/gallery";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.hero_slider', '.hero_slider-nav', {
        autoplay: true,
        speed: 1500,
        slidesPerView: 1
    });
    initSwiperSlider('.presentation_slider', '.presentation_slider-nav', {
        autoplay: true,
        speed: 1200,
        slidesPerView: 1,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: 1,
            },
            1199.98: {
                slidesPerView: 2,
            },
            1599.98: {
                slidesPerView: 3,
            },
        }
    });
    initSwiperSlider('.testimonials_slider', '.testimonials_slider-nav', {
        autoplay: true,
        speed: 1500,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    initSwiperSlider('.services_gallery-slider', '.services_gallery-slider_nav', {
        spaceBetween: 15,
        autoplay: true,
        speed: 1500,
        slidesPerView: 1,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1023.98: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })
    initGallery();
})