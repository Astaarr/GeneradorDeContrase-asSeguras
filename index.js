const contraseña = document.getElementById('contraseña');
const generar = document.getElementById('generar');



function generarContraseña(){

    const caracteresMayuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinuscula = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+';

    let caracteresaUsar = "";
    let contraseñaGenerada = '';


    const incluyeMayusculas = document.getElementById('mayusculas').checked;
    const incluyeMinusculas = document.getElementById('minusculas').checked;
    const incluyeNumeros = document.getElementById('numeros').checked;
    const incluyeSimbolos = document.getElementById('simbolos').checked;
    const longitud = document.getElementById('longitud').value;


    if (incluyeMayusculas) {
        caracteresaUsar += caracteresMayuscula;
    }
    if (incluyeMinusculas) {
        caracteresaUsar += caracteresMinuscula;
    }
    if (incluyeNumeros) {
        caracteresaUsar += numeros;
    }
    if (incluyeSimbolos) {
        caracteresaUsar += simbolos;
    }

    for(let i = 0; i<longitud; i++){
        const randomIndex = Math.floor(Math.random() * caracteresaUsar.length);
        contraseñaGenerada += caracteresaUsar.charAt(randomIndex);
    }
    contraseña.value = contraseñaGenerada;
}

function copiarContraseña(){
    contraseña.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles: ');
}



