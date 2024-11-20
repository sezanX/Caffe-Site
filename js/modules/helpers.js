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

export function preventDefault() {
    document.addEventListener('click', function (e) {
        if ((e.target.tagName === 'A' && e.target.getAttribute('href') === '#') || (e.target.closest('a') !== null && e.target.closest('a').getAttribute('href') === '#')) {
            e.preventDefault();
        }
    });

    document.addEventListener('submit', e => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
        }
    })
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}

export function hideCover() {
    const coverElems = document.querySelectorAll('.cover');
    if (coverElems) {
        coverElems.forEach((el, i) => {
            el.addEventListener('click', () => {
                el.classList.add('hidden')
            })
        })
    }
}
