import "./src/scripts/index.js";

document.addEventListener("DOMContentLoaded", async () => {

    const buttons = [
        { active: true, text: 'Inicio', link: '/'},
        { active: false, text: 'Contact con nosotros', link: '/contacta'},
        { active: false, text: 'Conócenos', link: '/conocer'}
    ];

    const header = document.querySelector('header-component');
    header.buttons = buttons;
});