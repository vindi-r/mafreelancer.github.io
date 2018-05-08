$('.menu-wrapper').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
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

var vm = new Vue({
    el: ".portfolio",
    data: {
        project: [
            { id: 1, name: "Bill Gates", category: "HTML", preview: "alisayed.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 2, name: "Steve Jobs", category: "HTML", preview: "amazing.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 3, name: "Jeff Bezos", category: "JS", preview: "Apollo.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 4, name: "George Clooney", category: "HTML", preview: "Be-Latte.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 5, name: "Meryl Streep", category: "JS", preview: "bicycle.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 6, name: "Amy Poehler", category: "HTML", preview: "Brandly.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 7, name: "Lady of Lórien", category: "Vector", preview: "Corporate.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 8, name: "BB8", category: "Vector", preview: "Home.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] },
            { id: 9, name: "Michael Scott", category: "Vector", preview: "kitchen-master.png", url: "https://google.com", data_created: { month: "January", year: 2018 }, stack: ["HTML", "CSS", "JS"] }
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
            var id = e.toElement.parentNode.getAttribute("data-id");
            this.target.name = this.project[id].name;
            this.target.stack = this.project[id].stack.join(" ,");
            this.target.img = this.project[id].preview;
            this.target.created = this.project[id].data_created;
            this.target.url = this.project[id].url;
        }
    }
});


var pic = document.querySelectorAll(".portfolio__item"),
    modal_portfolio = document.querySelector(".portfolio > .modal"),
    btn_close = document.querySelectorAll(".btns-group__button--download"),
    page = document.querySelector("body"),
    modal = document.querySelectorAll(".modal");

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