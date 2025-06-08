import "flowbite";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "/src/css/style.css";

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

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
        autoplay: {
            delay: 3500, // задержка между переключениями
            disableOnInteraction: false, // чтобы не останавливался при взаимодействии
        },
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

        modules: [Navigation, Autoplay],
    });
});

document.querySelectorAll(".read-more-wrapper").forEach((wrapper) => {
    const moreText = wrapper.querySelector(".read-more-text");
    const dots = wrapper.querySelector(".dots");
    const button = wrapper.querySelector(".read-more-toggle ");

    if (!moreText || !button || !dots) return;

    let expanded = false;

    button.addEventListener("click", () => {
        expanded = !expanded;
        if (expanded) {
            moreText.classList.remove("hidden");
            dots.classList.add("hidden");
            button.textContent = "Скрыть";
        } else {
            moreText.classList.add("hidden");
            dots.classList.remove("hidden");
            button.textContent = "Читать больше";
        }
    });
});
