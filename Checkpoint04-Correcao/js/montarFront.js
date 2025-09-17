import { carros } from './carros.js';

// const btnTodos = document.querySelector('#todos');
// const btn2000 = document.querySelector('#carros2000');
// const btnManual = document.querySelector('#carrosManual');
// const btnAcima130 = document.querySelector('#carrosAcima130');
// console.log(btnTodos, btn2000, btnManual, btnAcima130);

const botoes = document.querySelectorAll('button'); // Exibe uma Node List
console.log(botoes);

// const botoes2 = document.getElementsByTagName('button') // Exibe uma HTML Collection
// console.log(botoes2);

document.addEventListener('DOMContentLoaded', () => {
    // Recuperar o elemento de grid que exibirá os cards

    const gridHTML = document.querySelector('#gridCards');

    function exibirCarros(listaCarros) {

        // limpando o grid para não ficar sobrepondo os elementos
        gridHTML.innerHTML = '';
    }
})
