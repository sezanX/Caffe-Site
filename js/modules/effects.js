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

import {CountUp} from 'countup.js';
import lax from 'lax.js'

export function initCounterAnimation(numSelector = '.countNum', animationDuration = 3, startVal = 0) {
    const numArr = document.querySelectorAll(numSelector);
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        let value = +num.dataset.value;
        let options = {
            prefix: num.dataset.prefix ? num.dataset.prefix : '',
            suffix: num.dataset.suffix ? num.dataset.suffix : '',
            separator: num.dataset.separator ? num.dataset.separator : '',
            duration: animationDuration,
            startVal: startVal
        };
        let animatedNum = new CountUp(num, value, options);

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(num);

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    animatedNum.start();
                    observer.unobserve(entry.target);
                }
            });
        }
    }
}

export function initParallax() {
    window.onload = () => {
        window.lax = {presets: lax.presets}
        lax.init()
        lax.addDriver('scrollY', function () {
            return window.scrollY
        })
        lax.addElements('.parallaxX', {
            scrollY: {
                translateX: [
                    ['elInY', 'elOutY'],
                    [0, - 100],
                    ]
            }
        })
        lax.addElements('.parallaxY', {
            scrollY: {
                translateY: [
                    ['elInY', 'elOutY'],
                    [0, 150],
                    {
                        inertia: 10
                    }]
            }
        })
    }
    document.querySelectorAll('.parallaxX').forEach(el => {
        if (window.innerWidth < 1023) {
            el.classList.add('static');
        } else {
            el.classList.remove('static');
        }
    })
}
