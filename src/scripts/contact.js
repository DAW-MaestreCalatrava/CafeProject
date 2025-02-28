import "../components/icons/icons.js";
import "../components/profile/profile.js";
import "../components/text/text.js";
import "../components/input/input.js";
import "../components/footer/footer.js";
import "../components/textarea/textarea.js";
import "../components/button-component/button-component.js";
import "../components/header/header.js";
import "../components/form/form.js";
import "../components/section2-component/section2.js";
import "../components/section1/section1.js";
import "../components/popup/popup.js";

document.addEventListener("formSubmit", (ev) => {

    const data = ev.detail;

    console.log(data)

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('La respuesta a la solicitud no está bien: ' + response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            const popup = document.querySelector('popup-component');

            popup.classList.add('show');

            popup.setAttribute('name', data.name);
            popup.setAttribute('email', data.email);
            popup.setAttribute('message', data.message);
            popup.setAttribute('id', json.id);
            popup.setAttribute('date', json.createdAt);
        })
        .catch((error) => console.error('Ha surgido un problema con la solicitud', error));

});