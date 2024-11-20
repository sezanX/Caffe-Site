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

import Headroom from "headroom.js";
import {Offcanvas} from "bootstrap";

export function drawNav() {
    const header = document.querySelector('.header');
    const menuTrigger = document.querySelector('#headerTrigger');
    const menuWrapper = document.querySelector('.header_nav');
    const menuDropdowns = document.querySelectorAll('.header_nav .dropdown-menu');
    const triggers = document.querySelectorAll('.dropdown-toggle');

    const offcanvasMenu = document.querySelector('#offcanvasMenu');
    let bsOffcanvas;

    if (offcanvasMenu) {
       bsOffcanvas = new Offcanvas(offcanvasMenu);
    }

    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.toggle('active');
        if (menuTrigger.classList.contains('active')) {
            openMenu();
        } else {
            closeMenu();
        }
    })

    function openMenu() {
        menuWrapper.classList.add('active');
        header.classList.add('opened');
        header.classList.add('sticky');
        document.documentElement.classList.add('fixed');
    }

    function closeMenu() {
        menuTrigger.classList.remove('active');
        menuWrapper.classList.remove('active', 'show');
        if (offcanvasMenu) {
            bsOffcanvas.hide();
        }
        header.classList.remove('opened');
        if (window.scrollY === 0) {
            header.classList.remove('sticky');
        }
        menuDropdowns.forEach(el => {
            el.classList.remove('show');
        })
        triggers.forEach(el => {
            el.ariaExpanded = "false";
        })
        document.documentElement.classList.remove('fixed');
    }

    initHeadroom(header);
    setActivePageClass(document.querySelector('.header'));
    setDropdownMenu();

    window.addEventListener('scroll', () => makeNavSticky(header, menuTrigger));
    window.addEventListener('resize', closeMenu);
    window.addEventListener('resize', setDropdownMenu);
}

// hide header on scroll
function initHeadroom(headerEl) {
    const headroom = new Headroom(headerEl, {
        offset: 500,
        classes: {
            pinned: "header--pinned",
            unpinned: "header--unpinned",
        }
    });
    headroom.init();
}

// set activity class for the current page
function setActivePageClass(headerEl) {
    const menuListItems = document.querySelectorAll('.nav-item');

    menuListItems.forEach((item, i) => {
        if (item.dataset.page === headerEl.dataset.page || item.dataset.mainLink && item.dataset.pageParent === headerEl.dataset.pageParent) {
            item.classList.add('current');
        }
    })

}

// change header on scroll

// dropdown menus (mobile/desktop)
function setDropdownMenu() {
    const dropdownElems = document.querySelectorAll('.dropdown');
    const triggers = document.querySelectorAll('.dropdown-toggle');
    const menuLists = document.querySelectorAll('.dropdown-menu');

    triggers.forEach((el, i) => {

        function closeMenu() {
            el.classList.remove('active');
            menuLists[i].classList.remove('active');
        }

        if (window.innerWidth > 1199.98 && document.querySelector('#offcanvasMenu') === null) {
            el.style.pointerEvents = 'default';
            el.dataset.bsToggle = '0';
            menuLists[i].classList.remove('collapse');
            window.addEventListener('resize', closeMenu)
        } else {
            el.dataset.bsToggle = 'collapse';
            menuLists[i].classList.add('collapse');
            el.addEventListener('click', () => {
                el.classList.toggle('active');
                menuLists[i].classList.toggle('active');
            })
            window.addEventListener('resize', closeMenu);
            window.addEventListener('scroll', closeMenu)
        }

    })


    dropdownElems.forEach(el => {

        el.addEventListener('mouseover', function (e) {
            let trigger = this.querySelector('a[data-trigger="dropdown"]');
            let menu = trigger.nextElementSibling;
            trigger.classList.add('active');
            menu.classList.add('active');
        });

        el.addEventListener('mouseleave', function (e) {
            let trigger = this.querySelector('a[data-trigger="dropdown"]');
            let menu = trigger.nextElementSibling;
            trigger.classList.remove('active');
            menu.classList.remove('active');
        })
    })

}

function makeNavSticky(headerEl, triggerEL) {
    if (window.scrollY > 0 || triggerEL.classList.contains('active')) {
        headerEl.classList.add('sticky');

    } else if (!triggerEL.classList.contains('opened')) {
        headerEl.classList.remove('sticky');
    }
}