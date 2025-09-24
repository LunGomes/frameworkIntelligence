import { carros } from './carros.js';

// buscar os elementos na página
const grid = document.querySelector('#gridCards');
const totalCarros = document.querySelector('#total');
const botoes = document.querySelectorAll('button');

// função que recebe os values
function filtrarCarros(filtro) {
    // criar um array que receberá os resultados dos carros filtrados
    let resultado = [];

    // usar o switch para definir que tipo de botão foi pressionado
    switch(filtro) {
        case '2000':
            resultado = carros.filter(carro => carro.ano <= 2000);
            break;
        case 'manual': 
            resultado = carros.filter(carro => carro.transmissao.toLowerCase() <= manual);
            break;
        case '130000': 
            resultado = carros.filter(carro => carro.preco > 130000);
            break;
    default:
        resultado = carros;
    }

    // renderizar os carros no card
    grid.innerHTML = ''; // Limpar o grid antes de carregar um nov
    resultado.forEach(carro => {
        grid.innerHTML += 
        `
            <div div class="col-md-6 col-lg-4 my-3">
                <div class="card">
                    <a href="" class="text-decoration-none text-dark">
                        <img src="${carro.foto}" class="card-img-top" alt="${carro.modelo}">
                        <div class="card-body">
                            <h4 class="card-title text-center py-3 border-bottom text-danger">${carro.marca} - ${carro.modelo}</h4>
                            <div div class="d-flex justify-content-between py-3 my-3 border-bottom">
                                <h5>Ano: ${carro.ano}</h5>
                                <h5>Cor: ${carro.cor}</h5>
                            </div>
                            <div class="d-flex justify-content-between my-3 py-3 border-bottom">
                                <p class="my-0">${carro.transmissao}</p>
                                <p class="my-0">${carro.combustivel}</p>
                            </div>
                            <h3 class="text-center text-danger">${carro.preco}</h3>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });

    // Preencher o total de carros
    totalCarros.textContent = `Total de carros: ${resultado.length}`;
}

// percorrer o array de botões para atribuir um listener a cada um dos botões
botoes.forEach(btn => {
    btn.addEventListener('click', () => filtrarCarros(btn.value))
});

filtrarCarros();