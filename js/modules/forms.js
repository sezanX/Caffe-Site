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

const emailRegExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

import pickmeup from 'pickmeup';
import { TimepickerUI } from "timepicker-ui";
import IMask from 'imask';
import {initModal} from "./modal";

const defaults = {
    toast: true,
    position: 'top-end',
    timer: 3000,
    customClass: {
        popup: 'alert_popup',
        title: 'alert_popup-title',
        htmlContainer: 'alert_popup-content',
        closeButton: 'alert_popup-close icon-close',
        container: 'alert_popup-container'
    }
}

async function sendForm(form) {
    let handler = form.getAttribute('action');
    const response = await fetch(
        handler,
        {
            method: 'POST',
            body: new FormData(form)
        }
    );
    if(response.ok) {
        form.reset();
    }
}

export function validateForm(target, fieldSelector = '.field') {
    const form = document.querySelector(target);
    const inputsArr = document.querySelectorAll(`${target} ${fieldSelector}`);
    const valid = elem => !elem.classList.contains('error');

    if (form) {
        let notificationText = '';

        form.addEventListener('submit', e => {
            e.preventDefault();
            for (let i = 0; i < inputsArr.length; i++) {
                const el = inputsArr[i];
                const value = el.value;
                if (el.classList.contains('required') && value === '') {
                    el.classList.add('error');
                } else if (el.dataset.type === 'email' && !emailRegExp.test(value)) {
                    el.classList.add('error');
                } else if (el.dataset.type === 'tel' && isNaN(+value)) {
                    el.classList.add('error');
                }

                el.addEventListener('input', () => {
                    el.classList.remove('error');
                });
            }

            if (Array.from(inputsArr).every(valid)) {
                inputsArr.forEach(el => {
                    el.classList.remove('error');
                })
                switch (form.dataset.type) {
                    case "contacts": {
                        notificationText = 'Your message has been sent. We\'ll reply you as soon as possible.';
                        break
                    }
                    case "booking": {
                        notificationText = 'Booking confirmation has been sent to your email.';
                        break
                    }
                    case "search": {
                        notificationText = 'Sorry, nothing found.';
                        break
                    }
                    case "reply": {
                        notificationText = 'Your comment is awaiting moderation.';
                        break
                    }
                }
                sendForm(form);
                initModal({...defaults, html: `<p class="main">${notificationText}</p>`});
            }
        })
    }
}

export function validate() {
    validateForm('[data-type="contacts"]');
    validateForm('[data-type="search"]');
    validateForm('[data-type="reply"]');
    validateForm('[data-type="booking"]');
}

export function applyDatePicker(selector = '[data-type="date"]') {
    let elem = document.querySelector(selector);
    let currentYear = new Date().getFullYear();
    const interval = {
        min: new Date,
        max: new Date(currentYear + 1, 0, 1),
    }
    const maskOptions = {
        mask: Date,
        pattern: 'd.`m.`Y',
        autofix: true,
        overwrite: true,
        blocks: {
            d: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2,
            },
            m: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            Y: {
                mask: IMask.MaskedRange,
                from: currentYear,
                to: currentYear + 1,
            }
        },
        ...interval
    };
    if (elem) {
        pickmeup(selector, {
            render: function (date) {
                if (date < new Date()) {
                    return {disabled: true, class_name: 'date-in-past'};
                }
                return {};
            },
            default_date: false,
            hide_on_select: true,
            format: 'd.m.Y',
            ...interval
        })
        let mask = IMask(elem, maskOptions);
        elem.addEventListener('pickmeup-change', e => {
            mask.updateValue();
        })
    }
}

export function applyTimePicker() {
    let elem = document.querySelector('.timepicker-parent');
    if (elem) {
        const basicPicker = new TimepickerUI(elem, {mobile: true});
        basicPicker.create();
    }
}