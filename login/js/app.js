document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            navbar.classList.add("bg-gray-800", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-gray-800", "shadow-lg");
        }
    });

    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 5) {
        navbar.classList.add('text-white');
        navbar.classList.remove('text-gray-200');
    } else {
        navbar.classList.remove('text-white');
        navbar.classList.add('text-gray-200');
    }
});

function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('hidden');
};

function loginRegister() {
    return {
        showRegister: false,
        toggleRegister() {
            this.showRegister = !this.showRegister;
        }
    }
};

const urlParams = new URLSearchParams(window.location.search);
const redirectPage = urlParams.get('page');
document.getElementById('closeButton').addEventListener('click', function() {
    setTimeout(function() {
        if (redirectPage) {
            window.location.href = redirectPage;
        } else {
            window.history.back();
        }
    }, 1000);
});