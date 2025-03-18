//Criação do array para armazenar os nomes
let amigos = [];

//Função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    inputAmigo.value = '';
    
    atualizarListaAmigos();
}

//Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

//Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}