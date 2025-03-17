let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeDoAmigo = inputAmigo.value.trim();

    if(nomeDoAmigo ===""){
        alert ('Insira o nome do amigo');
        return;
    }

    if(amigos.includes(nomeDoAmigo)){
        alert(`o nome "${nomeDoAmigo}" ja esta na lista.`);
        return;
    }

    amigos.push(nomeDoAmigo);
    inputAmigo.valuealue = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for(let i= 0; i <amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length === 0) {
        alert ('Não tem amigo disonivel, por favor insira um nome!')
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;


}




