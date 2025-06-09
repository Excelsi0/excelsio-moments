import "flowbite";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import Swiper from "swiper";
import { Navigation, Autoplay, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "/src/css/style.css";

//открытые фотки
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//свайпер
document.addEventListener("DOMContentLoaded", () => {
    //свайпер работ
    const swiper = new Swiper(".project__swiper", {
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: ".arrow-next",
            prevEl: ".arrow-prev",
        },

        modules: [Navigation],
    });

    //свайпер галереи
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
        parallax: true,

        navigation: {
            nextEl: ".arrow-next_gallery",
            prevEl: ".arrow-prev_gallery",
        },

        modules: [Navigation, Autoplay, Parallax],
    });
});

// читать больше
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

import SimpleParallax from "simple-parallax-js/vanilla";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.getElementsByClassName("main__bg");
    new SimpleParallax(images, {
        orientation: "right",
        scale: 1.15,
        delay: 0.5,
        transition: "cubic-bezier(0,0,0,1)",
    });
});

//gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.3,
    effects: true,
});

gsap.fromTo(
    ".mn-bg",
    { opacity: 1 },
    {
        opacity: 0,
        scrollTrigger: {
            trigger: ".mn-bg",
            start: "center",
            // end: "820",
            scrub: true,
        },
    }
);

if (ScrollTrigger.isTouch !== 1) {
    gsap.fromTo(
        ".gsap-lt",
        { x: -50, opacity: 0.5 },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".gsap-lt",
                scrub: true,
                end: "center",
            },
        }
    );
    gsap.fromTo(
        ".gsap-rt",
        { x: 50, opacity: 0.5 },
        {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".gsap-rt",
                scrub: true,
                end: "center",
            },
        }
    );
}

let itemsL = gsap.utils.toArray(".accordion-odd");
let itemsR = gsap.utils.toArray(".accordion-even");

itemsL.forEach((item) => {
    gsap.fromTo(
        item,
        { x: -100 },
        {
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top 55%",
                scrub: true,
            },
        }
    );
});

itemsR.forEach((item) => {
    gsap.fromTo(
        item,
        { x: 100 },
        {
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top 55%",
                scrub: true,
            },
        }
    );
});
