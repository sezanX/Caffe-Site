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

import Swal from 'sweetalert2/dist/sweetalert2.js'

export function initModal(settings, customPopupClass) {
    Swal.fire({
        showClass: {
            popup: 'fadeIn'
        },
        hideClass: {
            popup: 'fadeOut'
        },
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: `
                <i class="icon-times"></i>
            `,
        customClass: {
            container: 'modal',
            popup: customPopupClass ? `${customPopupClass}` : 'modal_popup',
            closeButton: 'modal_popup-close',
            htmlContainer: 'modal_popup-content',
        },
        ...settings
    })
}
