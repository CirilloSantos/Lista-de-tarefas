const formulario = document.querySelector("form");
const inputTarefa = document.querySelector("input");

function marcarTarefaComoFeita(evento){
    let tarefa = document.querySelector('li');
    tarefa.classList.add('feito');
}

function cadastrarTarefas(evento){
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita);

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
}

formulario.addEventListener('submit', cadastrarTarefas);

