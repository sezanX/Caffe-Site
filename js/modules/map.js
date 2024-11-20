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

const _KEY = 'PasteYourGoogleMapsApiKeyHere';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme";

export default function initMap() {
    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",

    });
    const mapContainer = document.querySelector('#map');
    const coords = { lat: 40.73936818014904, lng: -73.44753952002102 };

    if (mapContainer) {
        loader.load().then(() => {
            const map = new google.maps.Map(mapContainer, {
                center: coords,
                zoom: 10,
                styles: [...mapTheme],
                disableDefaultUI: true,
            });
            const marker = new google.maps.Marker({
                position: coords,
                map: map,
                icon: './svg/marker.svg'
            });
        });
    }
}
