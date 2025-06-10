import "flowbite";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import Swiper from "swiper";
import { Navigation, Autoplay, Parallax, FreeMode, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "/src/css/style.css";

// кнопка
const mobileMenu = document.getElementById("mobile-menu");
const menuPanel = mobileMenu.querySelector("div > div");
const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const menuLinks = document.querySelectorAll(".menu-link");

// Функция блокировки скролла
function lockScroll() {
    document.body.style.overflow = "hidden";
}

// Функция разблокировки скролла
function unlockScroll() {
    document.body.style.overflow = "";
}

// Открытие меню
openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    lockScroll(); // Блокируем скролл
    setTimeout(() => menuPanel.classList.remove("-translate-x-full"), 10);
});

// Закрытие меню
function closeMenu() {
    menuPanel.classList.add("-translate-x-full");
    setTimeout(() => {
        mobileMenu.classList.add("hidden");
        unlockScroll(); // Разблокируем скролл
    }, 300);
}

closeBtn.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

// Закрытие при клике вне меню
mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
});
// При открытии меню
document.body.style.overflow = "hidden";
document.body.style.touchAction = "none"; // Для iOS

// При закрытии меню
document.body.style.overflow = "";
document.body.style.touchAction = "";

//*
//открытые фотки
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//свайпер
document.addEventListener("DOMContentLoaded", () => {
    const sliderMain = new Swiper(".slider_main", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 1000, // задержка между переключениями
            disableOnInteraction: true, // чтобы не останавливался при взаимодействии
        },
        freeMode: {
            enabled: true,
            momentum: true,
            sticky: true,
        },

        centeredSlides: true,
        parallax: true,
        breakpoints: {
            660: {
                spaceBetween: 60,
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".arrow-next_gallery",
            prevEl: ".arrow-prev_gallery",
        },
        modules: [Parallax, FreeMode, Navigation, Autoplay, Controller],
    });

    const sliderBg = new Swiper(".slider_bg", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,

        freeMode: {
            enabled: true,
            momentum: true,
            sticky: true,
        },
        centeredSlides: true,
        parallax: true,
        breakpoints: {
            660: {
                spaceBetween: 60,
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".arrow-next_gallery",
            prevEl: ".arrow-prev_gallery",
        },
        modules: [Parallax, FreeMode, Navigation, Controller],
    });

    // Синхронизация в реальном времени
    sliderMain.on("sliderMove", () => {
        // Передаём текущий прогресс переднего слайдера заднему
        sliderBg.setProgress(sliderMain.progress, 300); // 300ms — скорость анимации
    });

    // Инициализация начальной позиции
    sliderBg.setProgress(sliderMain.progress, 0);
    sliderMain.controller.control = sliderBg;

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

// Для левых элементов (odd)
itemsL.forEach((item) => {
    gsap.fromTo(
        item,
        { x: -50, opacity: 0 }, // Уменьшил смещение и добавил fade-in
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 85%", // Анимация начинается позже
                end: "top 40%",
                scrub: 1, // Можно уменьшить scrub до 0.5-1 для меньшей задержки
                markers: false, // Для отладки можно включить
                invalidateOnRefresh: true, // Решает проблемы с перерасчётом
            },
        }
    );
});

// Для правых элементов (even)
itemsR.forEach((item) => {
    gsap.fromTo(
        item,
        { x: 50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 40%",
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
            },
        }
    );
});
const smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.3,
    effects: true,
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            smoother.scrollTo(target, true, "top top");
        }
    });
});
