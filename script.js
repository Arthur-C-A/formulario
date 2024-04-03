const firebaseConfig = {
    apiKey: "AIzaSyDEv6861xFadtvq1oLz2Wb5B3sOvCUSDe4",
    authDomain: "datos-de-formulario.firebaseapp.com",
    projectId: "datos-de-formulario",
    storageBucket: "datos-de-formulario.appspot.com",
    messagingSenderId: "1052493048276",
    appId: "1:1052493048276:web:43cfaba8d3ca53c2aace41",
    measurementId: "G-VT5JTNFKY9"
};

// Inciamos firebase
firebase.initializeApp(firebaseConfig);

// creamos uan referencia
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const inputNombre = document.getElementById('name');
    const errorInputNombre = document.getElementById('nameError');
    if (inputNombre.value.trim() === '') {
        errorInputNombre.textContent = 'Por favor, introducí un nombre';
        errorInputNombre.classList.add('error-message');
    } else {
        errorInputNombre.textContent = '';
        errorInputNombre.classList.remove('error-message');
    }

    // Validar correo electrónico

    const inputEmail = document.getElementById('email');
    const errorEmail = document.getElementById('emailError');
    const regexEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmailPattern.test(inputEmail.value)) {
        errorEmail.textContent = 'Introduce un mail correcto';
        errorEmail.classList.add('error-message');
    } else {
        errorEmail.textContent = ''; // Limpiar el mensaje de error si el campo es válido
        errorEmail.classList.remove('error-message'); // Quitar la clase de error si el campo es válido
    }

    // Validar contraseña

    const inputPassword = document.getElementById('password');
    const errorInputPassword = document.getElementById('passwordError');

    if (inputPassword.value.length < 8) {
        errorInputPassword.textContent = 'Introduce una contraseña de mínimo 8 caracteres';
        errorInputPassword.classList.add('error-message');
    } else {
        errorInputPassword.textContent = '';
        errorInputPassword.classList.remove('error-message');
    }

    // Una vez que los campos son válidos, enviamos el formulario

    if (!errorInputNombre.textContent && !errorEmail.textContent && !errorInputPassword.textContent) {

        // Aquí se enviaría a un backend, pero como toca dormir para no
        alert('El formulario se envió con éxito');
        document.getElementById('formulario').reset();
    }
});



// validamos nombre