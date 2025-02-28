import "./src/scripts/index.js";

document.addEventListener("DOMContentLoaded", async () => {
    const header = document.querySelector('header-component');

    const url = window.location.pathname;

    console.log(url);

    const buttons = [
        { text: 'Home', link: './', active: url.includes('index') || url === '/' },
        { text: 'About', link: './about.html', active: url.includes('about') },
        { text: 'Contact', link: './contact.html', active: url.includes('contact') }
    ];

    header.buttons = buttons;
});
