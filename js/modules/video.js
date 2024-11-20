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

import YouTubePlayer from 'youtube-player';

export default function setYTFrame(videoId = "vP7X4HcDTwk") {
    const trigger = document.querySelector('.videoTrigger');
    const popup = document.querySelector('.videoPopup');
    const playerElem = document.querySelector('#YTplayer');

    if (playerElem) {
        let player;
        player = YouTubePlayer('YTplayer');
        player.loadVideoById(videoId);
        player.stopVideo();

        if (popup) {
            document.body.addEventListener('click', (e) => {
                if (e.target !== null) {
                    if (popup.classList.contains('visible')) {
                        if (e.target !== playerElem) {
                            popup.classList.remove('visible', 'fadeIn');
                            popup.classList.add('fadeOut');
                            player.stopVideo();
                        }
                    } else if (e.target === trigger || (e.target.closest('span') !== null && e.target.closest('span').classList.contains('videoTrigger'))) {
                        e.preventDefault();
                        popup.classList.remove('fadeOut');
                        popup.classList.add('visible', 'fadeIn');
                    }
                }
            })
        }
    }
}