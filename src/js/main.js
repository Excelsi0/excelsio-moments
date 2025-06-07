import "flowbite";
import "/src/css/style.css";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".project__swiper", {
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: ".arrow-next",
            prevEl: ".arrow-prev",
        },

        modules: [Navigation],
    });
    const swp_gallery = new Swiper(".gallery__swiper", {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },

        navigation: {
            nextEl: ".arrow-next_gallery",
            prevEl: ".arrow-prev_gallery",
        },

        modules: [Navigation],
    });
});
