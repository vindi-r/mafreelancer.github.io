$('.menu-wrapper').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
    $('.nav--menu').toggleClass('show-menu');
});

//fixed header
function fixedHeader() {
    var ww = $(window).scrollTop();
    if (ww > 0) {
        $('.header, .menu-wrapper, .nav--menu, #top, #tech-info').addClass('active');
    } else {
        $('.header, .menu-wrapper, .nav--menu, #top, #tech-info').removeClass('active');
    }
}
fixedHeader();

$(window).on('scroll', function() {
    fixedHeader();
});

//smooth scrolling
$('.nav__link, #look-to-networks, #top').click(function() {
    var scroll_el = $(this).attr('href').slice(1);
    var name_scroll_el = 'a[name="' + scroll_el + '"]';
    console.log(name_scroll_el);
    if ($(name_scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(name_scroll_el).offset().top
        }, 500);
        $('.nav--menu').removeClass('show-menu');
        $('.hamburger-menu').removeClass('animate');
    }
    return false;
});
var vm = new Vue({
    el: ".portfolio",
    data: {
        project: [{
                id: 1,
                name: "Ali Sayed’s Web Designing Project",
                category: "HTML",
                preview: "alisayed.png",
                url: "http://d90992qi.bget.ru/alisayed",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS", "JS"],
                desc: "Построен на CSS Grid Layout, сделано анимированное меню",
                desc_bool: true
            },
            {
                id: 2,
                name: "Le coq stortif",
                category: "HTML",
                preview: "lecoq.png",
                url: "http://d90992qi.bget.ru/lecoq",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS"],
                desc: "Простая листовка",
                desc_bool: true
            },
            {
                id: 3,
                name: "Быстрый (серверный дискаунтер)",
                category: "HTML",
                preview: "discounter.png",
                url: "http://d90992qi.bget.ru/fast",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS", "JS"],
                desc: "Адаптивный одностраничник",
                desc_bool: true
            },
            {
                id: 4,
                name: "Meet Perth",
                category: "HTML",
                preview: "meetperth.png",
                url: "http://d90992qi.bget.ru/meet-perth",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS"],
                desc: "Адаптивный одностраничник",
                desc_bool: true
            },
            {
                id: 5,
                name: "Hosting Company Next39",
                category: "HTML",
                preview: "next39.png",
                url: "http://d90992qi.bget.ru/next39",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS", "JS"],
                desc: "Адаптивный одностраничник",
                desc_bool: true
            },
            {
                id: 6,
                name: "Smart Cadastre",
                category: "HTML",
                preview: "smartcadastre.png",
                url: "http://d90992qi.bget.ru/smartcadastre",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS"],
                desc: "Страница с фиксированной версткой",
                desc_bool: true
            },
            {
                id: 7,
                name: "Teletrade",
                category: "HTML",
                preview: "teletrade.png",
                url: "http://d90992qi.bget.ru/money",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS", "JS"],
                desc: "Адаптивный одностраничник с использованием CSS-фреймворка UI-kit",
                desc_bool: true
            },
            {
                id: 8,
                name: "Tinkoff",
                category: "HTML",
                preview: "tinkoff.png",
                url: "http://d90992qi.bget.ru/tinkoff",
                data_created: { month: "Апрель", year: 2018 },
                stack: ["HTML", "CSS"],
                desc: "Адаптивный одностраничник в виде личного кабинета с использованием CSS-фреймворка Bootstrap",
                desc_bool: true
            },
            {
                id: 9,
                name: "Обычный калькулятор",
                category: "JS",
                preview: "calculator.png",
                url: "http://d90992qi.bget.ru/calculator",
                data_created: { month: "Май", year: 2018 },
                stack: ["JS"],
            },
            {
                id: 10,
                name: "Автодополнение",
                category: "JS",
                preview: "countries.svg",
                url: "http://d90992qi.bget.ru/countries",
                data_created: { month: "Май", year: 2018 },
                stack: ["JS"],
                vector: true,
                desc: "Предлагает варианты после первых введенных букв.",
                desc_bool: true
            },
            {
                id: 11,
                name: "Аватарка v.1",
                category: "Vector",
                preview: "avatar_1.svg",
                url: "http://d90992qi.bget.ru/calculator",
                data_created: { month: "March", year: 2018 },
                stack: ["SVG"],
                vector: true
            },
            {
                id: 12,
                name: "Аватарка v.2",
                category: "Vector",
                preview: "avatar_2.svg",
                url: "http://d90992qi.bget.ru/calculator",
                data_created: { month: "March", year: 2018 },
                stack: ["SVG"],
                vector: true
            },
            {
                id: 13,
                name: "За рабочим столом в векторе",
                category: "Vector",
                preview: "man_office.svg",
                url: "http://d90992qi.bget.ru/calculator",
                data_created: { month: "March", year: 2018 },
                stack: ["SVG"],
                vector: true
            },
            {
                id: 14,
                name: "Логотип",
                category: "Vector",
                preview: "logo-studio.svg",
                url: "http://d90992qi.bget.ru/calculator",
                data_created: { month: "March", year: 2018 },
                stack: ["SVG"],
                vector: true
            },
            {
                id: 15,
                name: "Региональная поддержка МГОУ",
                category: "HTML",
                preview: "help.png",
                url: "http://people.mgou.ru",
                data_created: { month: "Октябрь", year: 2015 },
                stack: ["HTML, CSS"],
                desc: "Обновление с Joomla 1.x.x до 3.x.x c последующей переверсткой контента и формы обратной связи",
                desc_bool: true
            },
            {
                id: 16,
                name: "Вестник МГОУ",
                category: "HTML",
                preview: "vestnik.png",
                url: "http://d90992qi.bget.ru/countries",
                data_created: { month: "Ноябрь", year: 2015 },
                stack: ["HTML, CSS, JS"],
                desc: "Небольшой одностраничник для перехода на Вестник МГОУ",
                desc_bool: true
            },
            {
                id: 17,
                name: "Ассоциация преподавателей немецкого языка  Московской области",
                category: "HTML",
                preview: "admg.png",
                url: "http://admg.mgou.ru",
                data_created: { month: "Январь", year: 2015 },
                stack: ["HTML, CSS"],
                desc: "Первый сайт, сделанный с нуля на Joomla 3.x.x. Сверстано по заказу дизайнера",
                desc_bool: true
            },
            {
                id: 18,
                name: "Студенческий портал МГОУ",
                category: "HTML",
                preview: "stud.png",
                url: "http://stud.mgou.ru",
                data_created: { month: "Май", year: 2015 },
                stack: ["HTML, CSS"],
                desc: "Сайт был обновлен с Joomla 2.x.x на Joomla 3.4 с устранением нарушений разметки.",
                desc_bool: true
            },
            {
                id: 19,
                name: "Сайт Московского государственного областного университета",
                category: "HTML",
                preview: "science.png",
                url: "http://old.mgou.ru/science/napr-nid",
                data_created: { month: "Ноябрь", year: 2015 },
                stack: ["HTML, CSS, JS"],
                desc: 'Раздел "Наука" сайта МГОУ, сверстанная по заказу дизайнера.',
                desc_bool: true
            },
            {
                id: 20,
                name: "Лица МГОУ",
                category: "HTML",
                preview: "people.png",
                url: "http://people.mgou.ru/science/napr-nid",
                data_created: { month: "Октябрь", year: 2015 },
                stack: ["HTML, CSS"],
                desc: 'Занимался дизайном и вёрсткой сайта',
                desc_bool: true
            },
            {
                id: 21,
                name: "Игрок",
                category: "Vector",
                preview: "player.svg",
                url: "http://people.mgou.ru/science/napr-nid",
                data_created: { month: "Октябрь", year: 2015 },
                stack: ["SVG"],
                vector: true
            },
            {
                id: 22,
                name: "Макет главной страница сайта финансовой тематики",
                category: "UI/UX",
                preview: "main-fin.png",
                url: false,
                data_created: { month: "Апрель", year: 2018 },
                stack: ["Ninjamock"],
            },
            {
                id: 23,
                name: "Финансовый калькулятор",
                category: "UI/UX",
                preview: "change.png",
                url: false,
                data_created: { month: "Апрель", year: 2018 },
                stack: ["Ninjamock"],
            }
        ],
        selectedCategory: "All",
        target: {
            id: "",
            name: "",
            stack: "",
            img: "",
            created: "",
            url: "",
            vector: "",
            desc: "",
            desc_bool: ""
        }
    },
    computed: {
        filteredProject: function() {
            var vm = this;
            var category = vm.selectedCategory;

            if (category === "All") {
                return vm.project;
            } else {
                return vm.project.filter(function(project) {
                    return project.category === category;
                });
            }
        }
    },
    methods: {
        click_page(e) {
            var id = e.toElement.parentNode.parentNode.getAttribute("data-id") - 1;
            this.target.name = this.project[id].name;
            this.target.stack = this.project[id].stack.join(" ,");
            this.target.img = this.project[id].preview;
            this.target.created = this.project[id].data_created;
            this.target.url = this.project[id].url;
            this.target.vector = this.project[id].vector;
            this.target.desc = this.project[id].desc;
            this.target.desc_bool = this.project[id].desc_bool
        }
    }
});


var pic = document.querySelectorAll(".portfolio__item"),
    modal_portfolio = document.querySelector(".portfolio > .modal"),
    modal_form = document.querySelector(".hello > .modal"),
    btn_close = document.querySelectorAll(".btns-group__button--download"),
    page = document.querySelector("body"),
    modal = document.querySelectorAll(".modal"),
    skills = document.querySelector(".skills"),
    header = document.querySelector("header"),
    look_to_networks = document.querySelector('#look-to-networks'),
    icons = document.querySelectorAll(".mdi"),
    modal_tech = document.querySelector(".technical-information");

for (i = 0; i < pic.length; i++) {
    pic[i].addEventListener("click", open_modal);
};
for (k = 0; k < btn_close.length; k++) {
    btn_close[k].onclick = close_modal;
};

function close_modal() {
    for (j = 0; j < modal.length; j++) {
        modal[j].scrollTop = 0;
        modal[j].classList.remove("modal--open");
    };
    page.classList.remove("modal--keep");
    return false

}

//animation icons
function flashing() {
    $('.mdi').addClass('look-to-networks');
    setTimeout(function() {
        $('.mdi').removeClass('look-to-networks');
    }, 3500);
}

look_to_networks.onclick = flashing;

function open_modal() {
    modal_portfolio.classList.add("modal--open");
    page.classList.add("modal--keep");
    header.classList.add("fix-padding");

}
