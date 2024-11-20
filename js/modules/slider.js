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

import Swiper, {Navigation, Autoplay, Pagination, EffectFade} from 'swiper';

Swiper.use([Navigation, Autoplay, Pagination, EffectFade]);

// basic swiper initialization
export function initSwiperSlider(container, parentClass, options) {
    const containerEL = document.querySelector(container);
    if (containerEL) {
        const swiper = new Swiper(container, {
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            pagination: {
                el: `${parentClass}.swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: `${parentClass} .swiper-button-next`,
                prevEl: `${parentClass} .swiper-button-prev`,
            },
            ...options,
        });
    }
}