/*var pic = document.querySelectorAll(".portfolio__item"),
    modal_portfolio = document.querySelector(".portfolio > .modal"),
    modal_form = document.querySelector(".hello > .modal"),
    btn_close = document.querySelectorAll(".btns-group__button--download"),
    page = document.querySelector("body"),
    modal = document.querySelectorAll(".modal"),
    skills = document.querySelector(".skills"),
    header = document.querySelector("header");*/

$('.menu-wrapper').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
    $('.nav--menu').toggleClass('show-menu');
});

//fixed header
function fixedHeader() {
    var ww = $(window).scrollTop();
    if (ww > 0) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
}
fixedHeader();

$(window).on('scroll', function() {
    fixedHeader();
});

//grid-expand
window.onscroll = function() {
    var ww = skills.getBoundingClientRect().top;
    if (ww < document.querySelector("header").clientHeight) {
        skills.classList.add('grid-default');
    } else {
        skills.classList.remove('grid-default');
    }
}

var vm = new Vue({
    el: ".portfolio",
    data: {
        project: [
            { id: 1, name: "Ali Sayed’s Web Designing Project", category: "HTML", preview: "alisayed.png", url: "http://d90992qi.bget.ru/alisayed", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 64311" },
            { id: 2, name: "Le coq stortif", category: "HTML", preview: "lecoq.png", url: "http://d90992qi.bget.ru/lecoq", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 178761" },
            { id: 3, name: "Быстрый (серверный дискаунтер)", category: "HTML", preview: "discounter.png", url: "http://d90992qi.bget.ru/fast", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 155311" },
            { id: 4, name: "Meet Perth", category: "HTML", preview: "meetperth.png", url: "http://d90992qi.bget.ru/meet-perth", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 111" },
            { id: 5, name: "Hosting Company Next39", category: "HTML", preview: "next39.png", url: "http://d90992qi.bget.ru/next39", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 111" },
            { id: 6, name: "Smart Cadastre", category: "HTML", preview: "smartcadastre.png", url: "http://d90992qi.bget.ru/smartcadastre", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 145745" },
            { id: 7, name: "Teletrade", category: "HTML", preview: "teletrade.png", url: "http://d90992qi.bget.ru/money", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 137541" },
            { id: 8, name: "Tinkoff", category: "HTML", preview: "tinkoff.png", url: "http://d90992qi.bget.ru/tinkoff", data_created: { month: "April", year: 2018 }, stack: ["HTML", "CSS", "JS"], desc: "Description 111" }
        ],
        selectedCategory: "All",
        target: {
            id: "",
            name: "",
            stack: "",
            img: "",
            created: "",
            url: ""
        }
        //target_id: "",
        //target_name: "",
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
            console.log(this.target.img);
            console.log(this.target.url);
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
    header = document.querySelector("header");

for (i = 0; i < pic.length; i++) {
    pic[i].addEventListener("click", open_modal);
    //pic[i].addEventListener("click", current_id);
};
for (k = 0; k < btn_close.length; k++) {
    btn_close[k].onclick = close_modal;
};

function close_modal() {
    for (j = 0; j < modal.length; j++) {
        modal[j].scrollTop = 0;
    };
    modal_portfolio.classList.remove("modal--open");
    page.classList.remove("modal--keep");

}

function open_modal() {
    modal_portfolio.classList.add("modal--open");
    page.classList.add("modal--keep");
}